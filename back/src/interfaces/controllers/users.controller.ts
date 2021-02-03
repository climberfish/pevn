import { Request, Response } from 'express';

export default class UsersController {
  public index(req: Request, res: Response): void {
    res.json({ id: 0, name: 'name' });
  }
}
