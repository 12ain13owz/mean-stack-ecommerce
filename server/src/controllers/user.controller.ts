import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../services/user.service';
import { createUserInput, loginInput } from '../schema/user.schema';

export async function signupHandler(
  req: Request<{}, {}, createUserInput>,
  res: Response,
  next: NextFunction
) {
  res.locals.func = 'signupHandler';

  try {
    const email = req.body.email;
    const check = await findUserByEmail(email);

    if (check)
      throw Object.assign(
        new Error('existing user found with smae email address.'),
        { status: 400 }
      );

    const cart = [];
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const body = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,
    };

    const user = await createUser(body);
    const data = { user: { id: user.id } };
    const token = jwt.sign(data, 'secret_ecom');

    res.json({ success: true, token });
  } catch (error) {
    next(error);
  }
}

export async function loginHandler(
  req: Request<{}, {}, loginInput>,
  res: Response,
  next: NextFunction
) {
  res.locals.func = 'loginHandler';

  try {
    const user = await findUserByEmail(req.body.email);
    if (!user)
      throw Object.assign(new Error('Invalid Email or Password'), {
        status: 401,
      });

    if (req.body.password !== user.password)
      throw Object.assign(new Error('Invalid Email or Password'), {
        status: 401,
      });

    const data = { user: { id: user.id } };
    const token = jwt.sign(data, 'secret_ecom');

    res.json({ success: true, token });
  } catch (error) {
    next(error);
  }
}
