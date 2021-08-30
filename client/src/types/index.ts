export interface shoppingCartItem {
  id: number;
  title: string;
  price: number;
  count: number;
  isChekced: boolean;
  deliveryFee: number;
  discount: number;
}

export interface IUser {
  id: number;
  user_id: string;
  name: string;
  is_oauth: boolean;
}

export interface IProductImage {
  createdAt: string;
  updatedAt: string;
  id: number;
  url: string;
  isThumbnail: number;
  type: string;
  product_id: number;
}

export interface IProduct {
  createdAt: string;
  updatedAt: string;
  id: number;
  title: string;
  price: number;
  content: string | null;
  discount: number;
  stock: number;
  sub_category_id: number;
  productImage: IProductImage[];
}

export interface IOrderCheck {
  ordered: boolean;
}

export interface ICart {
  id: number;
  count: number;
  createdAt: string;
  productId: number;
  title: string;
  price: number;
  image: string;
  discount: number;
}

export interface IDetails {
  content: {
    details: string;
    essentials: string;
  };
  createdAt: string;
  id: number;
  price: string;
  stock: number;
  sub_category_id: number;
  title: string;
  discount: number;
}

export interface IThumbnails {
  id: number;
  isThumbnail: number;
  type: string;
  product_id: number;
  url: string;
  targetId: string;
}

export interface IProductDetail {
  details: IDetails;
  thumbnails: IThumbnails[];
}

export type IReview = FormData;

export type IRating = {
  rating: number;
  count: string;
};

export interface IReviewCountAndRating {
  count: number;
  sum: string;
  ratings: IRating[];
}

export interface IQuestionCount {
  count: number;
}

export interface IProductReview {
  id: number;
  content: string;
  rating: number;
  name: string;
  createdAt: string;
  url: string[];
  productImage_url?: string;
  product_id?: number;
}

export interface IMyReview {
  reviews: IProductReview[];
  count: number;
}

export interface IMyQuestion {
  questions: IProductQuestion[];
  count: number;
}

export interface IProductQuestion {
  name?: string;
  id?: number;
  title: string;
  content: string;
  answer?: string;
  secret: boolean;
  category: string;
  product_id: string;
  user_id?: number;
  createdAt?: string;
}

export interface ISignUpUser {
  user_id: string;
  password: string;
  rePassword: string;
  name: string;
}

export interface IGithubUrl {
  githubUrl: string;
}

export interface ILoginUser {
  user_id: string;
  password: string;
}

export interface ISearchData {
  id: number;
  price: number;
  discount: number;
  image: string;
  title: string;
}

export interface IAddress {
  name: string | undefined;
  postcode: string;
  address: string;
  detailAddress: string;
  phone: string;
  isDefault: boolean;
  userId?: number;
  id?: number;
}
export interface ICategory {
  id: number;
  title: string;
  subCategories: ISubCategory[];
}

export interface ISubCategory {
  id: number;
  title: string;
}

export interface IBookmarkProduct {
  productId: number;
  title: string;
  price: number;
  image: string;
}

export interface IOrderProduct {
  id: number;
  title: string;
  price: number;
  img: string;
  count: number;
  discount: number;
}

export interface IOrderPost {
  products: { id: number; count: number }[];
  addressId?: string | null;
  status: string;
  deliveryRequestMessage?: string;
  paymentId?: number;
}

export interface IOrder {
  id: number;
  products: IOrderProduct[];
  status: string;
  address_id?: number | null;
  user_id: number;
  delivery_request_message?: string | null;
  deliveredAt?: string | Date;
  createdAt: string;
  updatedAt: string;
  payment_id?: number | null;
  userCoupon_id?: number | null;
  user_coupon_id?: number | null;
}

export interface IOrderUpdate {
  order: Partial<IOrder>;
  updateDefaultAddress?: boolean;
}

export interface IUserCoupon {
  createdAt: string;
  updatedAt: string;
  id: number;
  name: string;
  amount: number;
  is_valid: boolean;
}

export interface IMissionList {
  login?: boolean;
  bookmark?: boolean;
  moreDescription?: boolean;
  pay?: boolean;
  addCart?: boolean;
  checkDelivery?: boolean;
  changeAddress?: boolean;
  orderHistoryFilter?: boolean;
  search?: boolean;
  category?: boolean;
  createReview?: boolean;
  updateReview?: boolean;
  createQuestion?: boolean;
  updateQuestion?: boolean;
  imageView?: boolean;
  noticeView?: boolean;
  hidden1?: boolean;
  hidden2?: boolean;
}

export type MissionListKeys = keyof IMissionList;
