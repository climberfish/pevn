import 'reflect-metadata';
import cors from 'cors';
import helmet from 'helmet';
import express, { Application } from 'express';
import { json, urlencoded } from 'body-parser';
import Routes from 'interfaces/routes';
import dbConnection from 'infra/db';
import { errorHandler } from 'interfaces/routes/errorHandler';

class App {
  app: Application;

  routePrv: Routes = new Routes();

  dbConnection = dbConnection;

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));
    this.app.use(errorHandler);
  }
}

const { app } = new App();
export default app;
