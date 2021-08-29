import { Request, Response, NextFunction } from 'express';
import userRepository from '@/repositories/user.repository';
import ApiResponse from './response-format';
import HttpStatusCode from '@/types/statusCode';

export async function checkUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const user = await userRepository().findUserById(req.body.user_id);
  if (user) {
    ApiResponse(
      res,
      HttpStatusCode.CONFLICT,
      '이미 회원가입이 된 아이디입니다.'
    );
  }

  return next();
}
