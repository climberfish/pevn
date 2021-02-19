import { Request, Response } from 'express';
import UserRepository from 'domain/repositories/user.repository';
import { createToken } from 'infra/web/auth/jwt';

export default class AuthController {
  private userRepository = new UserRepository();

  async login(req: Request, res: Response) {
    let { username, password } = req.body;
    if (!username || !password) {
      res.status(400).send();
      return;
    };

    const user = await this.userRepository.findOne({ where: { username } });
    if (!user || !user.checkPassword(password)) {
      res.status(401).send();
      return;
    };

    const token = createToken(user.id, user.username);
    res.send(token);
  };

  async changePassword(req: Request, res: Response) {
    const id = res.locals.jwtPayload.userId;
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      res.status(400).send();
      return;
    }

    const user = await this.userRepository.findOne({ where: { id } });
    if (!user || !user.checkPassword(oldPassword)) {
      res.status(401).send();
      return;
    };

    user.password = newPassword;
    const errors = await user.validate();
    if (errors.length > 0) {
      res.status(400).json({ errors });
      return;
    }
    user.hashPassword();
    this.userRepository.save(user);

    res.status(204).send();
  };
}
