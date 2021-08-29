import { body } from 'express-validator';
import { validatePhone, validatePostcode } from '@/utils/validate';

export default [
  body('name').notEmpty().withMessage('body: name이 존재하지 않습니다'),
  body('postcode')
    .notEmpty()
    .custom((val: string) => validatePostcode(val))
    .withMessage('body: postcode가 올바르지 않습니다'),
  body('address').notEmpty().withMessage('body: address 존재하지 않습니다'),
  body('detailAddress')
    .notEmpty()
    .withMessage('body: detailAddress 존재하지 않습니다'),
  body('phone')
    .notEmpty()
    .custom((val: string) => validatePhone(val))
    .withMessage('body: phone 올바르지 않습니다'),
];
