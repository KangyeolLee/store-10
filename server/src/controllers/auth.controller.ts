import { Request, Response } from 'express';
import config from '../config';
import AuthService from '../services/auth.service';
import UserService from '../services/user.service';
import JwtService from '@/services/jwt.service';
import ApiResponse from '@/api/middlewares/response-format';
import HttpStatusCode from '@/types/statusCode';
import userRepository from '@/repositories/user.repository';

class AuthController {
  async callback(req: Request, res: Response) {
    const { code } = req.query;
    const token = await AuthService.getGitAccessToken(code as string);
    const gitUser = await AuthService.getGitUserInfo(token);
    const jwtRefreshToken = JwtService.refresh();

    const user = await userRepository().findUserById(gitUser.user_id);
    if (user) {
      const { user_id, name, id, is_oauth } = user;
      const jwtAccessToken = JwtService.generate({
        user_id,
        name,
        id,
        is_oauth,
      });
      res.cookie('refreshToken', jwtRefreshToken, {
        path: '/',
        httpOnly: true,
      });
      res.cookie('accessToken', jwtAccessToken, { path: '/', httpOnly: true });
    } else {
      const { user_id, name, id, is_oauth } = await UserService.createUser({
        ...gitUser,
        is_oauth: true,
        refreshToken: jwtRefreshToken,
      });
      const jwtAccessToken = JwtService.generate({
        user_id,
        name,
        id,
        is_oauth,
      });
      res.cookie('refreshToken', jwtRefreshToken, {
        path: '/',
        httpOnly: true,
      });
      res.cookie('accessToken', jwtAccessToken, { path: '/', httpOnly: true });
    }

    res.redirect(config.CLIENT_URL);
    res.end();
  }

  gitOAuthUrl(_, res: Response) {
    ApiResponse(
      res,
      HttpStatusCode.OK,
      '성공적으로 github URL을 가져왔습니다.',
      { githubUrl: config.GIT_OAUTH_URL }
    );
  }

  async Login(req: Request, res: Response) {
    const { user_id, password } = req.body;
    const _user = await AuthService.checkPassword(user_id, password);
    if (!_user) {
      ApiResponse(
        res,
        HttpStatusCode.UNAUTHORIZED,
        '존재하지 않는 유저 입니다.'
      );
      return;
    } else if (_user.passwordError) {
      ApiResponse(res, HttpStatusCode.UNAUTHORIZED, '비밀번호가 다릅니다.');
    }
    const { name, id, refreshToken, is_oauth } = _user;
    const jwtAccessToken = JwtService.generate({ user_id, name, id, is_oauth });

    res.cookie('refreshToken', refreshToken, { path: '/', httpOnly: true });
    res.cookie('accessToken', jwtAccessToken, { path: '/', httpOnly: true });
    ApiResponse(res, HttpStatusCode.OK, '로그인 성공');
  }

  async check(req: Request, res: Response) {
    const { id, user_id, name, is_oauth } = req.user;

    ApiResponse(res, HttpStatusCode.OK, '로그인 중입니다.', {
      id,
      user_id,
      name,
      is_oauth,
    });
  }

  async logout(req: Request, res: Response) {
    res.clearCookie('accessToken', { path: '/' });
    res.clearCookie('refreshToken', { path: '/' });

    ApiResponse(res, HttpStatusCode.NO_CONTENT);
  }

  async checkPassword(req: Request, res: Response) {
    const user_id = req.user.user_id;
    const { password } = req.body;
    const _user = await AuthService.checkPassword(user_id, password);
    if (_user.passwordError) {
      ApiResponse(res, HttpStatusCode.UNAUTHORIZED, '비밀번호가 다릅니다.');
    }
    ApiResponse(res, HttpStatusCode.NO_CONTENT);
  }
}

export default new AuthController();
