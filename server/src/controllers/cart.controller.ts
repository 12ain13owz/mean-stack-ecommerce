import { NextFunction, Request, Response } from 'express';
import { findUserById } from '../services/user.service';

export async function createCartHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.locals.func = 'createCartHandler';

  try {
    const user = await findUserById(res.locals.user.id);
    if (!user)
      throw Object.assign(new Error('Not found User'), {
        status: 404,
      });

    user.cartData[req.body.id] += 1;
    await user.save();

    res.json({ quantity: user.cartData[req.body.id] });
  } catch (error) {
    next(error);
  }
}

export async function removeCartHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.locals.func = 'removeCartHandler';

  try {
    const user = await findUserById(res.locals.user.id);
    if (!user)
      throw Object.assign(new Error('Not found User'), {
        status: 404,
      });

    if (user.cartData[req.body.id] > 0) user.cartData[req.body.id] -= 1;
    else user.cartData[req.body.id] = 0;

    await user.save();
    res.json({ message: 'ok' });
  } catch (error) {
    next(error);
  }
}

export async function getCartHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.locals.func = 'getCartHandler';

  try {
    const user = await findUserById(res.locals.user.id);
    if (!user)
      throw Object.assign(new Error('Not found User'), {
        status: 404,
      });

    res.json(user.cartData);
  } catch (error) {
    next(error);
  }
}
