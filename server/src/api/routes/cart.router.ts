import { Router } from 'express';
import wrapAsync from '@/utils/wrapAsync';
import CartController from '@/controllers/cart.controller';
import authJWT from '@/api/middlewares/auth.middleware';

const router = Router();

router.post('/', authJWT, wrapAsync(CartController.createOrUpdateCart));
router.get('/', authJWT, wrapAsync(CartController.getCarts));
router.delete('/', authJWT, wrapAsync(CartController.deleteCart));

export default router;
