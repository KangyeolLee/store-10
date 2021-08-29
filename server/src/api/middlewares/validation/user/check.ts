import { body } from 'express-validator';

export const checkUserValidators = [
  body('user_id').notEmpty().withMessage('body: user_id가 존재하지 않습니다'),
];
