import ProductData from '../../../crawler/data/totalData.json';
import { getConnection } from 'typeorm';
import { MainCategory } from '@/entities/mainCategory.entity';
import { SubCategory } from '@/entities/subCategory.entity';
import { Product } from '@/entities/product.entity';
import { ProductImage } from '@/entities/productImage.entity';

interface IProductData {
  id: number;
  categortTitle: string;
  mainCategoryHref: string;
  subCategory: ISubCategory[];
}

interface ISubCategory {
  subCategoryId: number;
  subCategoryTitle: string;
  subCategoryHref: string;
  item: Iitem[];
}

interface Iitem {
  itemHref: string;
  itemTitle: string;
  price: string;
  contents: string;
  itemImages: IitemImages[];
}

interface IitemImages {
  detailImage: string;
  origin: string;
  preloadImage: string;
  thumbnailImage: string;
}

export const initProductData = async () => {
  for (const [, mainCategory] of Object.entries(
    ProductData as IProductData[] | unknown
  )) {
    const newMainCategory = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(MainCategory)
      .values([
        { id: mainCategory.id + 1, title: mainCategory.categortTitle.trim() },
      ])
      .execute();

    const newMainId = newMainCategory.identifiers[0].id;

    mainCategory.subCategory.forEach(async (subCategory) => {
      const newSubcategory = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(SubCategory)
        .values([
          {
            id: subCategory.subCategoryId + 1,
            title: subCategory.subCategoryTitle,
            main_category_id: newMainId,
          },
        ])
        .execute();

      const newSubcategoryId = newSubcategory.identifiers[0].id;
      subCategory.item?.forEach(async (product) => {
        const newProduct = await getConnection()
          .createQueryBuilder()
          .insert()
          .into(Product)
          .values({
            title: product.itemTitle,
            price: Number(product.price),
            content: product.contents,
            stock: Math.floor(Math.random() * 901 + 100),
            sub_category_id: newSubcategoryId,
          })
          .execute();

        const newProductId = newProduct.identifiers[0].id;
        const images = [];
        product.itemImages?.forEach((image, i) => {
          let isThumbnail = false;
          if (i == 0) isThumbnail = true;
          images.push({
            product_id: newProductId,
            url: image.detailImage,
            isThumbnail: false,
            type: 'detail',
          });
          images.push({
            product_id: newProductId,
            url: image.origin,
            isThumbnail: false,
            type: 'origin',
          });
          images.push({
            product_id: newProductId,
            url: image.preloadImage,
            isThumbnail: isThumbnail,
            type: 'preload',
          });
          images.push({
            product_id: newProductId,
            url: image.thumbnailImage,
            isThumbnail: false,
            type: 'thumbnail',
          });
        });
        if (!images.length) return;

        await getConnection()
          .createQueryBuilder()
          .insert()
          .into(ProductImage)
          .values(images)
          .execute();
      });
    });

    console.log(mainCategory.categortTitle + ': 데이터 입력 완료');
  }
  console.log('전체 데이터 입력 완료');
};
