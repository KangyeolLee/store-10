import { IGithubUrl } from '@/types';
import client from '../client';

export async function githubLogin() {
  return await client.get<IGithubUrl>('/auth');
}
