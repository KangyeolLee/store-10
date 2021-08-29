import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import apiRouter from '@/api/routes';
import morgan from 'morgan';
import config from '@/config';

export default ({ app }: { app: Application }) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(
    cors({
      origin: [
        config.CLIENT_URL,
        /.*/,
      ], // 접근 권한을 부여하는 도메인
      credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가 for JWT http access
    })
  );
  app.use(cookieParser());
  app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));

  app.use('/api', apiRouter);

  app.use((req: Request, res: Response, next: NextFunction) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((err: Error, req: Request, res: Response) => {
    console.log(err);
    res.status(err.status || 500).json({
      error: err.message,
    });
  });
};
