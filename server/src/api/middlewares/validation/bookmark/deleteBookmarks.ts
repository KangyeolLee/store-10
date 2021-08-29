import { query } from 'express-validator';

const deleteBookmarkValidators = [
  query('productIds')
    .notEmpty() // 쿼리 스트링을 배열로 받는 방법?
    .withMessage('query: productIds는 비어있으면 안됩니다.'),
];

export default deleteBookmarkValidators;
