import ProductRepository from '@/repositories/product.repository';
import ProductImageRepository from '@/repositories/productImage.repository';
import ProductReviewRepository, {
  IReview,
} from '@/repositories/review.repository';
import ProductReviewImageRepository from '@/repositories/reviewImage.repository';
import ProductQuestionRepository from '@/repositories/question.repository';
import OrderRepository from '@/repositories/order.repository';
import OrderProductRepository from '@/repositories/orderProduct.repository';
import MainCateogryRepository from '@/repositories/mainCategory.repository';
import SubCateogryRepository from '@/repositories/subCategory.repository';
import { MainCategory } from '@/entities/mainCategory.entity';
import { SubCategory } from '@/entities/subCategory.entity';
import combineObjectArray from '@/utils/combineObjectArray';
import { Review } from '@/entities/review.entity';
import { ReviewImage } from '@/entities/reviewImage.entity';
import { Question } from '@/entities/question.entity';

interface ICollection {
  name: string;
  content: string;
  rating: number;
  id: number;
  url: string[];
}
export interface ICategoryProductParams {
  subCategoryId?: number;
  start?: number;
  orderType?: string;
}
class ProductService {
  async getProductById(id: string) {
    const productRepo = ProductRepository();
    return await productRepo.findProductById(id);
  }

  async getProductThumbnails(id: string) {
    const productImageRepo = ProductImageRepository();
    return await productImageRepo.findProductThumbnailsById(id);
  }

  async getProductQuestionsById(id: string, offset: string) {
    const productQuestionRepo = ProductQuestionRepository();
    return await productQuestionRepo.findProductQuestionsById(id, offset);
  }

  async getProductReviewsImagesById(id: number) {
    const productReviewImageRepo = ProductReviewImageRepository();
    return await productReviewImageRepo.findReviewImagesById(id);
  }

  async getProductReviewsCountById(id: string) {
    const productReviewRepo = ProductReviewRepository();
    return await productReviewRepo.findProductReviewsCountById(id);
  }

  async getProductQuestionsCountById(id: string) {
    const productQuestionRepo = ProductQuestionRepository();
    return await productQuestionRepo.findProductQuestionsCountById(id);
  }

  async getProductReviewsById(id: string, offset: string) {
    const productReviewRepo = ProductReviewRepository();
    const reviews = await productReviewRepo.findProductReviewsById(id, offset);
    return await this.getProductReviewImages(reviews);
  }

  async getProductReviewByUserId(user_id: number, offset: string) {
    const productReviewRepo = ProductReviewRepository();
    const reviews = await productReviewRepo.findProductReviewByUserId(
      user_id,
      offset
    );
    return await this.getProductReviewImages(reviews);
  }

  async getProductReviewsCountByUserId(user_id: number) {
    const productReviewRepo = ProductReviewRepository();
    return await productReviewRepo.findProductReviewsCountByUser(user_id);
  }

  async getProductQuestionsCountByUserId(user_id: number) {
    const productQuestionRepo = ProductQuestionRepository();
    return await productQuestionRepo.findProductQuestionCountByUser(user_id);
  }

  async getProductQuestionByUserId(user_id: number, offset: string) {
    const productQuestionRepo = ProductQuestionRepository();
    return await productQuestionRepo.findProductQuestionByUserId(
      user_id,
      offset
    );
  }

  async getProductReviewRating(id: string) {
    const productReviewRepo = ProductReviewRepository();
    return await productReviewRepo.findProductRatingById(id);
  }

  async getProductReviewRatingCount(id: string) {
    const productReviewRepo = ProductReviewRepository();
    const ratings = await productReviewRepo.findProductRatingCountById(id);

    const points = [1, 2, 3, 4, 5];
    const rates = ratings.map((rating) => rating.rating);
    const stars = points
      .map((point) => {
        const isExist = rates.includes(point);
        if (!isExist) return { rating: point, count: '0' };
      })
      .filter(Boolean);

    return [...ratings, ...stars];
  }

  async getProductReviewById(review_id: string) {
    const productReviewRepo = ProductReviewRepository();
    const productReviewImageRepo = ProductReviewImageRepository();
    const review = await productReviewRepo.findSelectedReview(review_id);
    const images = await productReviewImageRepo.findReviewImagesById(review.id);
    const url = images.map((image) => image.url);

    return { ...review, url };
  }

  async getProductQuestionById(id: string) {
    const productQuestionRepo = ProductQuestionRepository();
    return await productQuestionRepo.findSelectedQuestiopn(id);
  }

  async createReview(review: Review) {
    const productReviewRepo = ProductReviewRepository();
    return await productReviewRepo.createProductReview(review);
  }

  async createQuestion(question: Question) {
    const productQuestionRepo = ProductQuestionRepository();
    return await productQuestionRepo.createProductQuestion(question);
  }

  async createReviewImage(reviewImage: ReviewImage) {
    const productReviewImageRepo = ProductReviewImageRepository();
    return await productReviewImageRepo.createReviewImage(reviewImage);
  }

  async deleteReviewById(id: string, user_id: number) {
    const productReviewRepo = ProductReviewRepository();
    return await productReviewRepo.deleteProductReview(id, user_id);
  }

  async deleteQuestionById(id: string, user_id: number) {
    const productQuestionRepo = ProductQuestionRepository();
    return await productQuestionRepo.deleteProductQuestion(id, user_id);
  }

  async updateReviewById(id: number, review: Review) {
    const productReviewRepo = ProductReviewRepository();
    return await productReviewRepo.updateProductReview(id, review);
  }

  async updateQuestionById(id: number, question: Question) {
    const productQuestionRepo = ProductQuestionRepository();
    return await productQuestionRepo.updateProductQuestion(id, question);
  }

  async deleteReviewImageById(review_id: number, url: string) {
    const productReviewImageRepo = ProductReviewImageRepository();
    return await productReviewImageRepo.deleteReviewImage(review_id, url);
  }

  async getProducts({ category, limit }) {
    const productRepo = ProductRepository();
    const products = await productRepo.getProducts({ category, limit });

    return products;
  }

  async getBestProudcts(limit: number) {
    const productRepo = ProductRepository();
    const orderProductRepository = OrderProductRepository();
    // TODO qurey 최적화: image limit
    const bestProductIdsRaw = await orderProductRepository.getBestProductIds(
      limit
    );

    const bestProductIds = bestProductIdsRaw.map((raw) => raw.product_id);

    const _bestProducts = await productRepo.getProducts({
      ids: bestProductIds,
    });

    const bestProducts = _bestProducts.map((product) => ({
      ...product,
      productImage: product.productImage.filter((img) => img.type === 'detail'),
    }));

    return bestProducts;
  }

  async getRecommandProducts(limit: number) {
    const productRepo = ProductRepository();
    const products = await productRepo.getRandomProducts(limit);

    return products;
  }

  async searchElasticProductTitle(searchText: string) {
    const productRepo = ProductRepository();
    const response = await productRepo.searchElasticProduct(searchText);

    const data = response.hits.hits.map((row) => {
      return {
        id: row._source.id,
        price: row._source.price,
        discount: row._source.discount,
        title: row._source.title,
        image: row._source.image,
      };
    });

    return data;
  }

  async searchProductTitle({ searchText, start }: Record<string, string>) {
    const productRepo = await ProductRepository().getProductsByTitle({
      searchText,
      start,
    });

    return productRepo;
  }

  async getCategories() {
    const mainCategories = await MainCateogryRepository().getMainCategories();
    const subCategories = await SubCateogryRepository().getSubCategories();

    return combineObjectArray<MainCategory, SubCategory>({
      parentObjectArr: mainCategories,
      parentKey: 'id',
      childrenObjectArr: subCategories,
      childrenKey: 'main_category_id',
      childrenName: 'subCategories',
      parentRemoveColumns: ['createdAt', 'updatedAt'],
      childrenRemoveColumns: ['createdAt', 'updatedAt'],
    });
  }

  async getCategoryProducts({
    subCategoryId,
    start = 0,
    orderType,
  }: ICategoryProductParams) {
    const getCategoryProducts = await ProductRepository().getCategoryProducts({
      subCategoryId,
      start,
      orderType,
    });

    return getCategoryProducts;
  }

  async getProductReviewImages(reviews: IReview[]) {
    return (
      await Promise.all(
        reviews.map((res) => this.getProductReviewsImagesById(res.id))
      )
    ).reduce((collection: ICollection[], reviewImage, idx) => {
      const review = reviews[idx];
      const url = reviewImage.map((img) => img.url);
      const newReview = { ...review, url };
      collection.push(newReview);
      return collection;
    }, []);
  }
}

export default new ProductService();
