import { validatePassword } from '@/utils/validate';
import { body } from 'express-validator';

export const changeUserPasswordValidators = [
  body('password')
    .custom((val: string) => validatePassword(val))
    .withMessage(
      'body: password가 존재하지 않거나 password가 10자 이상 영어 대문자, 소문자, 숫자, 특수문자 중 2종류를 조합한 형식이 아닙니다.'
    ),
  body('rePassword')
    .notEmpty()
    .withMessage('body: rePassword가 필요합니다.')
    .custom((val: string, { req }) => {
      if (val !== req.body.password) return false;
      return true;
    })
    .withMessage('body: password와 rePassword가 다릅니다.'),
];
