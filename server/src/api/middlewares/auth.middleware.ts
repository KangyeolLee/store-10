import { Request, Response, NextFunction } from 'express';
import { User } from '@/entities/user.entity';
import JwtService from '@/services/jwt.service';
import AuthService from '@/services/auth.service';

const ERROR_USER_IS_NOT_EXIST = '현재 토큰을 가진 유저가 없습니다.';
const ERROR_ALL_TOKEN_IS_EXPIRED = '모든 토큰의 유효기간이 지났습니다.';
const ERROR_HEADER_COOKIE_IS_NOT_EXIST = '헤더에 쿠키가 존재하지않습니다.';

interface TokenInterface {
  user: {
    id: number;
    user_id: string;
    name: string;
    is_oauth: boolean;
  };
}

const ErrorJWT = (res: Response, message: string) => {
  res.status(401).json({ success: false, message }).end();
};

const authJWT = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.cookies.accessToken || !req.cookies.refreshToken) {
    ErrorJWT(res, ERROR_HEADER_COOKIE_IS_NOT_EXIST);
    return;
  }

  const cookies = req.cookies;
  const accesstoken = cookies['accessToken'];
  const refreshToken = cookies['refreshToken'];

  const access = JwtService.verify(accesstoken);
  const refresh = JwtService.verify(refreshToken);

  let user = {} as User;

  if (!access) {
    //accToken만 유효기간이 지남
    if (!refresh) {
      //acc, ref 모두 유효기간이 지남
      res.clearCookie('accessToken', { path: '/' });
      res.clearCookie('refreshToken', { path: '/' });
      ErrorJWT(res, ERROR_ALL_TOKEN_IS_EXPIRED);
      return;
    } else {
      // ref 기반으로 유저 조회
      const _user = await AuthService.getUserByRefreshToken(refreshToken);
      if (_user === null) {
        ErrorJWT(res, ERROR_USER_IS_NOT_EXIST);
        return;
      }
      user = _user;

      //acc 재발급
      const newAccessToken = JwtService.generate(user);
      res.cookie('accessToken', newAccessToken, {
        path: '/',
        httpOnly: true,
      });
    }
  } else {
    user = (access as TokenInterface).user;
    if (!refresh) {
      //ref 만 유효기간 지남
      const newRefreshToken = JwtService.refresh();
      await AuthService.updateRefresh(user.id, newRefreshToken);
      res.cookie('refreshToken', newRefreshToken, {
        path: '/',
        httpOnly: true,
      });
    }
  }

  const { id, user_id, name, is_oauth } = user;
  req.user = {
    id,
    user_id,
    name,
    is_oauth,
  };
  return next();
};

export default authJWT;
