import { Application, Router } from 'express';
import AuthRouter from './auth.router';
import UserRouter from './users.router';

export default class Routes {
  private router = Router();

  public routes(app: Application): void {
    this.router.use('/auth', AuthRouter);
    this.router.use('/users', UserRouter);
    app.use('/api', this.router);
  }
}
