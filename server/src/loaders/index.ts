import express from 'express';
import expressLoader from './express';
import DBConn from './typeOrm';

const init = async ({ app }: { app: express.Application }) => {
  await DBConn();
  await expressLoader({ app });
};

export default { init };
