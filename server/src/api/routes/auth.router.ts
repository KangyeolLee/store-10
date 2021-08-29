import { Router } from 'express';
import wrapAsync from '@/utils/wrapAsync';
import AuthController from '@/controllers/auth.controller';
import { oauthError } from '@/api/middlewares/oauth';
import authJWT from '@/api/middlewares/auth.middleware';
import loginUserValidators from '@/api/middlewares/validation/auth/loginUser';
import invalidRequest from '@/api/middlewares/invalid-request';
import { checkPasswordValidators } from '../middlewares/validation/auth/checkPassword';

const router = Router();

router.get('/', AuthController.gitOAuthUrl);
router.post(
  '/login',
  invalidRequest(...loginUserValidators),
  wrapAsync(AuthController.Login)
);
router.get('/callback', oauthError, wrapAsync(AuthController.callback));
router.get('/check', authJWT, wrapAsync(AuthController.check));
router.post('/logout', authJWT, wrapAsync(AuthController.logout));
router.post(
  '/passwordcheck',
  authJWT,
  invalidRequest(...checkPasswordValidators),
  wrapAsync(AuthController.checkPassword)
);

export default router;
