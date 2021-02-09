import UserRepository from 'domain/repositories/user.repository';
import { Request, Response } from 'express';

export default class UsersController {
  private readonly userRepository = new UserRepository();

  async getById(req: Request, res: Response): Promise<void> {
    const userId = parseInt(req.params.userId, 10);
    const user = await this.userRepository.getById(userId);
    if (user) res.json(user);
    res.status(404).json({ error: 'User not found' });
  }
}
