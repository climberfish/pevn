import express, { Application } from 'express';
import { json, urlencoded } from 'body-parser';
import Routes from 'interfaces/routes';

class App {
  public app: Application;

  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));
  }
}

const { app } = new App();
export default app;
