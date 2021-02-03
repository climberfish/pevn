import { Application } from 'express';
import UsersController from 'interfaces/controllers/users.controller';

export default class Routes {
  public usersController: UsersController = new UsersController();

  public routes(app: Application): void {
    app.route('/').get(this.usersController.index);
    app.route('/users').get(this.usersController.index);
  }
}
