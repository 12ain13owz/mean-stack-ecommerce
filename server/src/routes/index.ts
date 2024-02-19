import { NextFunction, Request, Response, Router } from 'express';
import product from './product.routes';
import user from './user.routes';
import cart from './cart.routes';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(200);
});

router.get('/error', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.locals.func = 'Test Function Error';
    throw Object.assign(new Error('Test message error'), { status: 400 });
  } catch (error) {
    next(error);
  }
});

router.use('/api/v1', product);
router.use('/api/v1', user);
router.use('/api/v1', cart);

export default router;
