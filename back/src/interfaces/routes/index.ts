import { Application, Router } from 'express';
import UsersController from 'interfaces/controllers/users.controller';

export default class Routes {
  public usersController: UsersController = new UsersController();

  private router = Router();

  public routes(app: Application): void {
    this.router
      .route('/users/:userId')
      .get((req, res) => this.usersController.getById(req, res));
    app.use('/api', this.router);
  }
}
