import { SearchSVG } from '@/assets/svgs';
import useMission from '@/hooks/useMission';
import useRecentSearch from '@/hooks/useRecentSearch';
import { getElasticProducts } from '@/lib/api/product';
import { useHistory } from '@/lib/Router';
import { ISearchData } from '@/types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import SearchItem from './SearchItem';
import * as S from './styles';

type IProps = {
  toggleOpen: () => void;
};

const Search = ({ toggleOpen }: IProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [recentItems, setRecentItems, removeRecentItem] = useRecentSearch();
  const [searchData, setSearchDatas] = useState<ISearchData[]>([]);
  const { historyPush } = useHistory();
  const [, setMissionList] = useMission();
  const inputRef = useRef<HTMLInputElement>(null);

  const productSearch = useCallback(async (searchText: string) => {
    const data = await getElasticProducts(searchText);

    if (data.length) {
      setSearchDatas(data);
    }
  }, []);
  // 한글 엔터 2번방지
  const inputKeypressHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.code == 'Enter') {
        setMissionList('search', true);
        setRecentItems(searchValue);
        historyPush(`/search/${searchValue}`);
        toggleOpen();
      }
    },
    [historyPush, searchValue, setMissionList, setRecentItems, toggleOpen]
  );

  const inputChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.currentTarget.value);
      productSearch(e.currentTarget.value);
    },
    [productSearch]
  );

  useEffect(() => {
    inputRef.current?.focus();
    document.body.style.cssText = `
        position: fixed;
        overflow-y: scroll; 
        top: -${window.scrollY}px - 100vh;
        width: 100%;
      `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = ``;
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <>
      <S.SearchWrapper>
        <S.SearchBackDrop onClick={toggleOpen}></S.SearchBackDrop>
        <S.SearchContents>
          <S.SearchInputWrap>
            <S.SearchInput
              onChange={inputChangeHandler}
              autoComplete={'off'}
              onKeyPress={inputKeypressHandler}
              type="text"
              label="Standard"
              name="search"
              _ref={inputRef}
              placeholder="검색"
            />
            <SearchSVG />
          </S.SearchInputWrap>
          <SearchItem
            addRecentSearch={setRecentItems}
            removeRecentSearch={removeRecentItem}
            toggleOpen={toggleOpen}
            searchValue={searchValue}
            recentItems={recentItems}
            searchData={searchData}
          />
        </S.SearchContents>
      </S.SearchWrapper>
    </>
  );
};

export default Search;
