import { body } from 'express-validator';

export const changeUserNickNameValidators = [
  body('nickname')
    .isString()
    .withMessage('body: 닉네임이 없거나 문자열 형식이 아닙니다.'),
];
