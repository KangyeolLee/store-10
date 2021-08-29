import { NextFunction, Request, Response } from 'express';

const wrapAsync = (fn: unknown) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (typeof fn === 'function') {
      fn(req, res, next).catch(next);
    }
  };
};

export default wrapAsync;
