import { Router } from 'express';
import UserController from '@/controllers/user.controller';
import wrapAsync from '@/utils/wrapAsync';
import invalidRequest from '@/api/middlewares/invalid-request';
import { checkUser } from '../middlewares/checkUser.middleware';
import { createUserValidators } from '../middlewares/validation/user/createUser';
import { checkUserValidators } from '../middlewares/validation/user/check';
import authJWT from '../middlewares/auth.middleware';
import { changeUserNickNameValidators } from '../middlewares/validation/user/changeUserNickName';
import { changeUserPasswordValidators } from '../middlewares/validation/user/changePassword';

const router = Router();
router.post(
  '/check',
  invalidRequest(...checkUserValidators),
  checkUser,
  wrapAsync(UserController.checkUserEmail)
);

router.post(
  '/',
  invalidRequest(...createUserValidators),
  checkUser,
  wrapAsync(UserController.createUser)
);

router.post(
  '/nickname',
  authJWT,
  invalidRequest(...changeUserNickNameValidators),
  wrapAsync(UserController.changeNickName)
);

router.post(
  '/password',
  authJWT,
  invalidRequest(...changeUserPasswordValidators),
  wrapAsync(UserController.changePassword)
);

router.get('/coupon', authJWT, wrapAsync(UserController.getCoupons));
router.patch('/coupon', authJWT, wrapAsync(UserController.useCoupon));
router.post('/coupon', authJWT, wrapAsync(UserController.registerCoupon));

export default router;
