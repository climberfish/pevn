import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import settings from 'infra/config/settings';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers['auth'];
  let jwtPayload;

  jwtPayload = <any>jwt.verify(token, settings.jwtSecret);
  res.locals.jwtPayload = jwtPayload;

  // The token is valid for 1 hour
  // We want to send a new token on every request
  const { userId, username } = jwtPayload;
  const newToken = createToken(userId, username);
  res.setHeader('token', newToken);

  next();
};

export const createToken = (userId: number, username: string) => jwt.sign(
  { userId, username },
  settings.jwtSecret,
  { expiresIn: '1h' },
);
