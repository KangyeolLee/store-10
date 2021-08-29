import { body } from 'express-validator';

const getBookmarkValidator = [
  body('productId')
    .isNumeric()
    .withMessage('body: productId는 반드시 숫자이어야 합니다.'),
];

export default getBookmarkValidator;
