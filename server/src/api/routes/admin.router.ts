import { Router } from 'express';
import AdminController from '@/controllers/admin.controller';
import wrapAsync from '@/utils/wrapAsync';

const router = Router();
router.post('/coupon', wrapAsync(AdminController.generateCoupon));

export default router;
