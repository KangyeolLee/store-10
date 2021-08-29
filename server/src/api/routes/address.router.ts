import { Router } from 'express';
import invalidRequest from '@/api/middlewares/invalid-request';
import validators from '@/api/middlewares/validation/address';
import AddressController from '@/controllers/address.controller';
import wrapAsync from '@/utils/wrapAsync';
import authJWT from '@/api/middlewares/auth.middleware';
const router = Router();

router.get('/default', authJWT, wrapAsync(AddressController.getDefaultAddress));
router.get('/', authJWT, wrapAsync(AddressController.getAddreses));
router.delete('/:id', authJWT, wrapAsync(AddressController.deleteAddress));
router.post(
  '/',
  invalidRequest(...validators),
  authJWT,
  wrapAsync(AddressController.createAddress)
);
router.put(
  '/',
  invalidRequest(...validators),
  authJWT,
  wrapAsync(AddressController.updateAddress)
);

export default router;
