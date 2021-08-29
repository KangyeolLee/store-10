import { ApiError } from '@/core/error';
import { User } from '@/entities/user.entity';
import GitHubAPI from '@/repositories/oauth/git.oauth';
import UserRepository from '@/repositories/user.repository';
import bcrypt from 'bcrypt-nodejs';
class AuthService {
  async getGitAccessToken(code: string) {
    const { access_token: accessToken } = await GitHubAPI.getAccessInfo(code);
    return accessToken;
  }

  async getGitUserInfo(code: string) {
    const { login: user_id, name } = await GitHubAPI.getUserInfo(code);

    return { user_id, name: name ?? user_id };
  }

  async checkPassword(userID: string, password: string) {
    const user = await UserRepository().findUserById(userID);
    if (user && user.password && !user.is_oauth) {
      const passwordCheck = await bcrypt.compareSync(password, user.password);
      if (passwordCheck) {
        const { name, id, refreshToken, is_oauth } = user;
        return { name, id, refreshToken, is_oauth };
      }
      return { passwordError: true };
    }
    return null;
  }

  async getUserByRefreshToken(refreshToken: string): Promise<User> {
    return await UserRepository().findUserByRefreshToken(refreshToken);
  }

  async updateRefresh(user_id: number, refreshToken: string) {
    await UserRepository().updateRefreshToken(user_id, refreshToken);
  }
}

export default new AuthService();
