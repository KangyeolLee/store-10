import { User } from '../entities/user.entity';

declare global {
  namespace Express {
    export interface Request {
      user: User;
    }

    export interface ResponseError extends Error {
      status?: number;
    }
  }

  interface Error {
    status?: number;
  }
}
