import { body } from 'express-validator';

export const checkPasswordValidators = [
  body().notEmpty().withMessage('body: password가 존재하지 않습니다'),
];
