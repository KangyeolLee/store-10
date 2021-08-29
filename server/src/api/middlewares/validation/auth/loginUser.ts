import { body } from 'express-validator';

export default [
  body('user_id').notEmpty().withMessage('body: user_id가 존재하지 않습니다'),
  body('password').notEmpty().withMessage('body: password가 존재하지 않습니다'),
];
