import { Router } from 'express';
import userRoutes from './user.router';
import authRoutes from './auth.router';
import productRoutes from './product.router';
import cartRoutes from './cart.router';
import addressRoutes from './address.router';
import bookmarkRoutes from './bookmark.router';
import orderRoutes from './order.router';
import adminRoutes from './admin.router';
import { handleApiError } from '../middlewares/api';
// import { initProductData } from '@/loaders/dataInit';

const router = Router();

router.get('/', (req, res) => {
  res.send('슑과잌붸흐벤 서버에 오신것을 환영합니다!!');
});
router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/product', productRoutes);
router.use('/cart', cartRoutes);
router.use('/address', addressRoutes);
router.use('/bookmark', bookmarkRoutes);
router.use('/order', orderRoutes);
router.use('/admin', adminRoutes);
// router.get('/initData', wrapAsync(initProductData));

router.use(handleApiError);

export default router;
