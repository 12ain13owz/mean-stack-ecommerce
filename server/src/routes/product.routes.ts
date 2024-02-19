import { Router } from 'express';
import { setFuncName, upload } from '../middlewares/upload.middleware';
import {
  uploadHandler,
  createProductHandler,
  removeProductHandler,
  findProductAllHandler,
} from '../controllers/product.controller';
import { validate } from '../middlewares/validate.middleware';
import {
  createProductSchema,
  removeProductSchema,
} from '../schema/product.schema';

const router = Router();

router.post('/upload', [setFuncName, upload], uploadHandler);

router.get('/product', findProductAllHandler);
router.post(
  '/product',
  [upload, validate(createProductSchema)],
  createProductHandler
);
router.delete(
  '/product/:id',
  [validate(removeProductSchema)],
  removeProductHandler
);

export default router;
