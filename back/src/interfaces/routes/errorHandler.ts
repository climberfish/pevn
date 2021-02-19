import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export const errorHandler = (error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(error);
  }
  console.error(error);
  res.status(500).send();
}
