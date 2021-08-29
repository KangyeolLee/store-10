import { ConnectionOptions } from 'typeorm';
import config from './src/config';

export default {
  type: 'mysql',
  host: config.DB_HOST,
  port: config.DB_PORT,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  synchronize: process.env.NODE_ENV === 'production' ? false : false,
  logging: process.env.NODE_ENV === 'production' ? false : true,
  entities: ['src/entities/**/*.ts'],
  cli: {
    entitiesDir: 'src/entities',
  },
} as ConnectionOptions;
