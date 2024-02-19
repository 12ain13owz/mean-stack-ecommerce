import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export async function varifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.locals.func = 'createCartHandler';
    const token = req.header('auth-token');

    if (!token)
      throw Object.assign(new Error('Please authenticate using validate'), {
        status: 401,
      });

    const data: any = jwt.verify(token, 'secret_ecom');
    res.locals.user = data.user;

    next();
  } catch (error) {
    next(error);
  }
}
