import { Router } from 'express';
import ProductController from '@/controllers/product.controller';
import wrapAsync from '@/utils/wrapAsync';
import authJWT from '@/api/middlewares/auth.middleware';
import multerS3 from '@/api/middlewares/s3.middleware';

const router = Router();

// @@--- GET 요청 ---@@ //
router.get('/elastic/search', wrapAsync(ProductController.serchElasticProduct));
router.get('/search', wrapAsync(ProductController.serchProduct));
router.get('/recommand', wrapAsync(ProductController.getRecommandProducts));
router.get('/best', wrapAsync(ProductController.getBestProducts));
router.get('/category-list', wrapAsync(ProductController.getCategories));
router.get('/category', wrapAsync(ProductController.getCategoryProducts));
router.get('/', wrapAsync(ProductController.getProducts));
router.get('/:id', wrapAsync(ProductController.getProductById));

// Product-Review 조회 관련
router.get('/review/:id', authJWT, ProductController.getSelectedReviewInfo);
router.get(
  '/review/user/:offset',
  authJWT,
  ProductController.getProductReviewsByUserId
);
router.get('/review/count/:id', ProductController.getProductReviewsCountById);
router.get(
  '/review/:id/:offset',
  wrapAsync(ProductController.getProductReviewsById)
);

// Product-Question 조회 관련
router.get('/question/:id', authJWT, ProductController.getSelectedQuestionInfo);
router.get(
  '/question/user/:offset',
  authJWT,
  ProductController.getProductQuestionByUserId
);
router.get(
  '/question/count/:id',
  ProductController.getProductQuestionsCountById
);
router.get('/question/:id/:offset', ProductController.getProductQuestionsById);

// @@--- POST 요청 ---@@ //
router.post(
  '/review',
  authJWT,
  multerS3.array('images', 3),
  ProductController.postProductReviewById
);
router.post(`/question`, authJWT, ProductController.postProductQuestionById);

// @@--- DELETE 요청 ---@@ //
router.delete(
  '/review/:id',
  authJWT,
  ProductController.deleteProductReviewById
);
router.delete(
  '/reviewImage/:id',
  authJWT,
  ProductController.deleteProductReviewImageById
);
router.delete(
  `/question/:id`,
  authJWT,
  ProductController.deleteProductQuestionById
);

// @@--- PUT 요청 ---@@ //
router.put(
  '/review/:id',
  authJWT,
  multerS3.array('images', 3),
  ProductController.putProuctReviewById
);
router.put('/question/:id', authJWT, ProductController.putProductQuestionById);

export default router;
