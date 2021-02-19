import { Request, Response, NextFunction } from 'express';
import UserRepository from 'domain/repositories/user.repository';

export enum Role {
  ADMIN = 'admin',
  DEFAULT = 'default',
};

export const checkRole = (roles: Role[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const id = res.locals.jwtPayload.userId;

    const userRepository = new UserRepository();
    const user = await userRepository.findOne({ where: { id } });

    if (!user) {
      res.status(401).send();
      return;
    };
    if (roles.indexOf(user.role) === -1) res.status(401).send();

    next();
  };
};
