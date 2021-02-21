import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { json, urlencoded } from 'body-parser';
import { errorHandler } from 'interfaces/routes/errorHandler';
import ApiRouter from 'interfaces/routes';

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  const app = express();

  app.use(cors());
  app.use(helmet());
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(errorHandler);
  app.use('/api', ApiRouter);

  app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
}

export default startServer;
