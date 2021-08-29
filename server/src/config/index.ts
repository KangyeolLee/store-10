import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || `development`;

const env = dotenv.config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV === 'production' ? './.env.prod' : './.env.dev'
  ),
}).parsed;

const loadEnv = (key: string): string => {
  const value = env[key];
  if (value === undefined) {
    throw new Error(`환경변수 ${key}가 정의 되지 않음`);
  }
  return value;
};

export default {
  PORT: Number(loadEnv('PORT')),
  DB_PORT: Number(loadEnv('DB_PORT')),
  DB_USERNAME: loadEnv('DB_USERNAME'),
  DB_HOST: loadEnv('DB_HOST'),
  DB_PASSWORD: loadEnv('DB_PASSWORD'),
  DB_DATABASE: loadEnv('DB_DATABASE'),
  JWT_SECRET: loadEnv('JWT_SECRET'),
  GIT_OAUTH_URL: loadEnv('GIT_OAUTH_URL'),
  GIT_CLIENT_ID: loadEnv('GIT_CLIENT_ID'),
  GIT_CLIENT_SECRET: loadEnv('GIT_CLIENT_SECRET'),
  CLIENT_URL: loadEnv('CLIENT_URL'),
  ELASTIC_HOST: loadEnv('ELASTIC_HOST'),
  S3_ACCESS_KEY_ID: loadEnv('S3_ACCESS_KEY_ID'),
  S3_SECRET_ACCESS_KEY: loadEnv('S3_SECRET_ACCESS_KEY'),
  S3_REGION: loadEnv('S3_REGION'),
  S3_BUCKET: loadEnv('S3_BUCKET'),
  ADMIN_PASSWORD: loadEnv('ADMIN_PASSWORD'),
};
