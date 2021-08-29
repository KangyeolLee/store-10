import { Request, Response, NextFunction } from 'express';

import { ApiError } from '@/core/error';

export function handleApiError(
  err: any,
  _: Request,
  res: Response,
  next: NextFunction
): Response | void {
  if (err instanceof ApiError) {
    console.log('ApiError 발생: %O', err);

    return res.status(err.status).json({
      errors: {
        message: err.message,
      },
    });
  }
  return next(err);
}
