import client from '../client';
import {
  ICategory,
  IProduct,
  IProductDetail,
  ISearchData,
  IProductReview,
  IReviewCountAndRating,
  IReview,
  IProductQuestion,
  IQuestionCount,
  IMyReview,
  IMyQuestion,
} from '@/types';
import { MAIN_IMAGE_LIMIT } from '@/utils/constant/offsetLimit';

export const getProductById = async (id: string) => {
  return await client.get<IProductDetail>(`/product/${id}`);
};

export const getProductReviewsById = async (id: string, offset: number) => {
  return await client.get<IProductReview[]>(`/product/review/${id}/${offset}`);
};

export const getProductQuestionById = async (id: string, offset: number) => {
  return await client.get<IProductQuestion[]>(
    `/product/question/${id}/${offset}`
  );
};

export const getProductReviewsByUser = async (offset: number) => {
  return await client.get<IMyReview>(`/product/review/user/${offset}`);
};

export const getProductQuestionByUser = async (offset: number) => {
  return await client.get<IMyQuestion>(`/product/question/user/${offset}`);
};

export const getProductReviewsCountById = async (id: string) => {
  return await client.get<IReviewCountAndRating>(`/product/review/count/${id}`);
};

export const getProductQuestionCountById = async (id: string) => {
  return await client.get<IQuestionCount>(`/product/question/count/${id}`);
};

export const getProductSelectedReview = async (id: number) => {
  return await client.get<IProductReview>(`/product/review/${id}`);
};

export const getProductSelectedQuestion = async (id: number) => {
  return await client.get<IProductQuestion>(`/product/question/${id}`);
};

export const getRecommandProducts = async () => {
  return await client.get<IProduct[]>(
    `/product/recommand?limit=${MAIN_IMAGE_LIMIT}`
  );
};

export const getRecentProducts = async () => {
  return await client.get<IProduct[]>(`/product?limit=${MAIN_IMAGE_LIMIT}`);
};

export const getBestProducts = async () => {
  return await client.get<IProduct[]>(
    `/product/best?limit=${MAIN_IMAGE_LIMIT}`
  );
};

export const getElasticProducts = async (searchString: string) => {
  return await client.get<ISearchData[]>(
    `/product/elastic/search?q=${searchString}`
  );
};

export const getSearchProducts = async ({
  pageParam = { start: 0, searchText: '' },
}) => {
  return await client.get<IProduct[]>(
    `/product/search?search=${pageParam.searchText}&start=${pageParam.start}`
  );
};

export const getCateogries = async () => {
  return await client.get<ICategory[]>(`/product/category-list`);
};
export const getCategoryProducts = async ({
  pageParam = {
    start: 0,
    subCateogry: 1,
    orderType: 'createdAt',
  },
}) => {
  return await client.get<IProduct[]>(
    `/product/category?subCategoryId=${pageParam.subCateogry}&start=${pageParam.start}&orderType=${pageParam.orderType}`
  );
};

export const postProductReview = async (data: IReview) => {
  return await client.post<IReview>(`/product/review`, data);
};

export const postProductQuestion = async (data: IProductQuestion) => {
  return await client.post<IProductQuestion>(`/product/question`, data);
};

export const putProductReview = async ({
  id,
  data,
}: {
  id: number;
  data: IReview;
}) => {
  return await client.put<IReview>(`/product/review/${id}`, data);
};

export const putProductQuestion = async ({
  id,
  data,
}: {
  id: number;
  data: IProductQuestion;
}) => {
  return await client.put<IProductQuestion>(`/product/question/${id}`, data);
};

export const deleteProductReview = async (id: number) => {
  return await client.delete(`/product/review/${id}`);
};

export const deleteProductQuestion = async (id: number) => {
  return await client.delete(`/product/question/${id}`);
};

export const deleteProductReviewImage = async ({
  id,
  url,
}: {
  id: number;
  url: string;
}) => {
  return await client.delete(`/product/reviewImage/${id}`, { data: { url } });
};
