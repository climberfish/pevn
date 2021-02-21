import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { json, urlencoded } from 'body-parser';
import { errorHandler } from 'interfaces/routes/errorHandler';
import dbConnection from 'infra/db';
import Routes from 'interfaces/routes';

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  const app = express();
  
  app.use(cors());
  app.use(helmet());
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(errorHandler);

  await dbConnection;
  new Routes().routes(app);
  app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
  return app;
}

export default startServer;
