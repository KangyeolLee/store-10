import fetch from 'node-fetch';
import config from '@/config';
import querystring from '@/utils/queryString';

type AuthResponse = {
  access_token: string;
  token_type: string;
  scope: string;
};

//필요한 깃허브 정보 추가
type GithubUserResponse = {
  login: string;
  // avatar_url: string;
  name: string;
};

const OAUTH_GIT_URL = 'https://github.com/login/oauth';
const API_GIT_URL = 'https://api.github.com/user';

class GithubAuthManager {
  async getAccessInfo(code: string): Promise<AuthResponse> {
    const qs = querystring({
      client_id: config.GIT_CLIENT_ID,
      client_secret: config.GIT_CLIENT_SECRET,
      code,
    });
    const res = await fetch(`${OAUTH_GIT_URL}/access_token` + qs, {
      method: 'POST',
      headers: {
        accept: 'application/json',
      },
    });
    return res.json();
  }

  async getUserInfo(accessToken: string): Promise<GithubUserResponse> {
    const res = await fetch(`${API_GIT_URL}`, {
      headers: {
        accept: 'application/vnd.github.v3+json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.json();
  }
}

const githubManagerInstance = new GithubAuthManager();
export default githubManagerInstance;
