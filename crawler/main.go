package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"runtime"
	"strings"
	"sync"
	"time"

	sF "main.com/common"

	"github.com/PuerkitoBio/goquery"
)

type MainCategory struct {
	Idx   int           `json:"id"`
	Title string        `json:"categortTitle"`
	Href  string        `json:"mainCategoryHref"`
	Sub   []SubCategory `json:"subCategory"`
}

type SubCategory struct {
	IdxSub   int     `json:"subCategoryId"`
	TitleSub string  `json:"subCategoryTitle"`
	HrefSub  string  `json:"subCategoryHref"`
	Items    *[]Item `json:"item"`
}

type Item struct {
	HrefItem      string      `json:"itemHref"`
	Title         string      `json:"itemTitle"`
	Price         string      `json:"price"`
	ProductDetail Content     `json:"contents"`
	Itemimages    interface{} `json:"itemImages"`
}
type Content struct {
	Details    string `json:"details"`
	Essentials string `json:"essentials"`
}

const (
	COUPANG_URL = "https://www.coupang.com"
	USER_AGENT  = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36"
)

func main() {
	runtime.GOMAXPROCS(runtime.NumCPU())
	//문구 카테고리 상품 가져오오오오기
	categories := getCategories("office")

	wg := new(sync.WaitGroup)
	for _, data := range categories {
		for _, subCategory := range data.Sub {
			wg.Add(1)
			sc := subCategory
			go func(_href string, _items *[]Item) {
				defer wg.Done()
				items := getSubCategoryItemsURLInfo(_href, _items)
				sc.Items = items
			}(sc.HrefSub, sc.Items)
		}
	}
	wg.Wait()

	ch := make(chan MainCategory)
	for _, data := range categories {
		mc := data
		go func(MainCategory) {
			for j, subCategory := range mc.Sub {
				_, sc := j, subCategory
				for k, _item := range *sc.Items {
					item := getItemInfo(_item.HrefItem, _item)
					(*sc.Items)[k] = item
					//짧은 시간내에 너무 많은 요청을 해서 오류가 발생하여 추가.
					//쿠팡님 째성합니다...
					//0.5초 슬립
					time.Sleep(400000000)
				}
				mc.Sub[j] = sc
			}
			ch <- mc
		}(mc)
	}

	TotalCategories := []MainCategory{}
	i := 0
	for mc := range ch {
		file, _ := json.MarshalIndent(mc, "", " ")

		TotalCategories = append(TotalCategories, mc)
		_ = ioutil.WriteFile("data/"+mc.Title+".json", file, 0777)
		fmt.Println(mc.Title, "Done")

		i++
		if i == len(categories) {
			totalFile, _ := json.MarshalIndent(TotalCategories, "", " ")
			_ = ioutil.WriteFile("data/totalData.json", totalFile, 0777)
		}
	}
}

func getDocument(url string) (*goquery.Document, *http.Response) {
	_url := url
	time.Sleep(300000000)
	fmt.Println(url)
	req, err := http.NewRequest("GET", _url, nil)
	sF.CheckErr(err)
	req.Header.Add("User-Agent", USER_AGENT)
	req.Header.Add("Accept-Encoding", "identity")
	client := &http.Client{}

	res, err2 := client.Do(req)
	sF.CheckErr(err2)
	if res.StatusCode != 200 {
		fmt.Println(res)
		// sF.CheckCode(res)
		return nil, res
	}

	doc, err3 := goquery.NewDocumentFromReader(res.Body)
	sF.CheckErr(err3)

	return doc, res
}

func getCoupangDocument(url string) (*goquery.Document, *http.Response) {
	_url := COUPANG_URL + url
	req, err := http.NewRequest("GET", _url, nil)
	sF.CheckErr(err)
	req.Header.Add("User-Agent", USER_AGENT)
	req.Header.Add("Accept-Encoding", "identity")
	client := &http.Client{}

	res, err2 := client.Do(req)
	sF.CheckErr(err2)
	if res.StatusCode != 200 {
		fmt.Println(res)
		// sF.CheckCode(res)
		return nil, res
	}

	doc, err3 := goquery.NewDocumentFromReader(res.Body)
	sF.CheckErr(err3)

	return doc, res
}

// 카테고리의 명칭 및 각 카테고리 url 반환
func getCategories(firstDepthCategory string) []MainCategory {
	mainCategory := new([]MainCategory)

	doc, res := getCoupangDocument("")
	if doc == nil {
		return nil
	}
	defer res.Body.Close()

	Depth := doc.Find("." + firstDepthCategory + " .depth")
	secondDepth := Depth.Find(".second-depth-list")

	thirdCategoryIdx := 0
	secondDepth.Each(func(idx int, s *goquery.Selection) {
		subCategory := []SubCategory{}
		secondSel := s.Find("a").First()
		title := strings.Replace(secondSel.Text(), "/", "\\", -1)
		href, isFind := secondSel.Attr("href")
		if !isFind {
			log.Fatalln(errors.New(title + " 요거 없는디용?"))
			return
		}

		thirdSel := s.Find(".third-depth-list a")
		thirdSel.Each(func(_ int, ss *goquery.Selection) {
			if ss.Text() == "더보기" {
				return
			}

			thirdHref, _ := ss.Attr("href")
			subCategory = append(subCategory, SubCategory{thirdCategoryIdx, sF.CleanString(ss.Text()), thirdHref + "?eventCategory=breadcrumb&eventLabel=&page=1", new([]Item)})
			thirdCategoryIdx++
		})

		data := MainCategory{idx, title, href, subCategory}
		*mainCategory = append(*mainCategory, data)
	})
	return *mainCategory
}

//각 서브 카테고리별 아이템 url 반환 최대 60개
func getSubCategoryItemsURLInfo(href string, items *[]Item) *[]Item {
	doc, res := getCoupangDocument(href)
	if doc == nil {
		return nil
	}

	defer res.Body.Close()
	_items := doc.Find(".baby-product-link")

	_items.Each(func(_ int, s *goquery.Selection) {
		tagImag := s.Find("dt.image img").First()
		isAdult, _ := tagImag.Attr("src")

		itemHref, _ := s.Attr("href")
		if itemHref == "" || strings.Contains(isAdult, "adultProduct_plp.png") {
			return
		}
		newItem := new(Item)
		newItem.HrefItem = itemHref
		*items = append(*items, *newItem)
	})
	return items
}

// 각 아이템 정보 반환 (가격, 이미지, 제목, [내용..ㅠㅠㅠㅠㅠ 자바스크립트동작이라 안가져와짐...])
func getItemInfo(href string, item Item) Item {
	if href == "" {
		return item
	}
	doc, res := getCoupangDocument(href)
	defer res.Body.Close()
	if doc == nil {
		return item
	}

	item.HrefItem = href
	itemInfo := doc.Find("script#tti-logger + script")
	if !strings.Contains(itemInfo.Text(), "exports.sdp = ") {
		return item
	}
	data := strings.Split(itemInfo.Text(), "exports.sdp = ")[1]
	data = strings.Split(data, ";\n")[0]

	// Unmarshal 로 진행하면 int형 데이터 값에 오차가 생김
	d := json.NewDecoder(strings.NewReader(data))
	d.UseNumber()

	var result map[string]interface{}
	if err := d.Decode(&result); err != nil {
		fmt.Println(err.Error())
	}

	productId := fmt.Sprintf("%v", result["productId"])
	itemId := fmt.Sprintf("%v", result["itemId"])
	vendorItemId := fmt.Sprintf("%v", result["vendorItemId"])

	apiUrl := "https://www.coupang.com/vp/products/" + productId + "/items/" + itemId + "/vendoritems/" + vendorItemId

	item.ProductDetail = getItemContent(apiUrl)

	item.Itemimages = result["images"]
	item.Title = fmt.Sprintf("%v", result["title"])

	price := strings.Replace(doc.Find(".total-price").First().Text(), "원", "", -1)
	price = strings.Replace(sF.CleanString(price), ",", "", -1)
	item.Price = price

	return item
}

func getItemContent(url string) Content {
	doc2, res := getDocument(url)
	defer res.Body.Close()

	var _result map[string]interface{}
	content := doc2.Text()

	json.Unmarshal([]byte(content), &_result)

	details, err := json.Marshal(_result["details"])
	if err != nil {
		panic(err)
	}

	essentials, err := json.Marshal(_result["essentials"])
	if err != nil {
		panic(err)
	}
	return Content{Details: string(details), Essentials: string(essentials)}
}
