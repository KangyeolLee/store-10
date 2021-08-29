import express from 'express';
import loaders from '@/loaders';

import config from '@/config';

async function startServer() {
  const app = express();

  await loaders.init({ app });

  app.listen(config.PORT, () => {
    console.log(`app listening at http://localhost:${config.PORT}`);
  });
}

startServer();
