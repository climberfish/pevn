import User from 'domain/models/user.entity';
import UserRepository from 'domain/repositories/user.repository';
import { Request, Response } from 'express';

export default class UsersController {
  private readonly userRepository = new UserRepository();

  async listAll(req: Request, res: Response) {
    const users = await this.userRepository.find({
      select: ['id', 'username', 'role']
    });
    res.json({ users });
  };

  async getOneById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await this.userRepository.findOne(id, {
      select: ['id', 'username', 'role']
    });
    if (user) res.json({ user });
    else res.status(404).json({ error: 'User not found' });
  };

  async newUser(req: Request, res: Response) {
    const { username, password, role } = req.body;
    const user = new User();
    user.username = username;
    user.password = password;
    user.role = role;

    const errors = await user.validate();
    if (errors.length > 0) {
      res.status(400).json({ errors });
      return;
    }
    user.hashPassword();
    await this.userRepository.save(user);
    res.status(201).send();
  };

  async editUser(req: Request, res: Response) {
    const { id } = req.params;
    const { username, role } = req.body;

    const user = await this.userRepository.findOne(id, {
      select: ['id', 'username', 'role']
    });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    };

    user.username = username;
    user.role = role;
    const errors = await user.validate();
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }
    await this.userRepository.save(user);
    res.status(204).send();
  };

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
  
    const user = await this.userRepository.findOne(id, {
      select: ['id', 'username', 'role']
    });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    };
    this.userRepository.delete(id);
    res.status(204).send();
  };  
}
