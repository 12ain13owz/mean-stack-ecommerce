import { Router } from 'express';
import {
  createCartHandler,
  getCartHandler,
  removeCartHandler,
} from '../controllers/cart.controller';
import { varifyToken } from '../middlewares/auth.middleware';

const router = Router();

router.post('/addcart', varifyToken, createCartHandler);
router.post('/removecart', varifyToken, removeCartHandler);
router.post('/getcart', varifyToken, getCartHandler);

export default router;
