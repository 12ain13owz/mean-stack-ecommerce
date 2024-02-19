import { NextFunction, Request, Response } from 'express';
import {
  createProductInput,
  removeProductInput,
} from '../schema/product.schema';
import {
  createProduct,
  findProductAll,
  removeProduct,
} from '../services/product.service';
import { omit } from 'lodash';
import { privateFields } from '../models/product.model';

export async function uploadHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.locals.func = 'upload';

    res.json({
      sucess: 1,
      imageURL: `http://localhost:3000/images/${req.file?.filename}`,
    });
  } catch (error) {
    next(error);
  }
}

export async function findProductAllHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.locals.func = 'findProductAllHandler';
    const products = await findProductAll();

    res.json(products);
  } catch (error) {
    next(error);
  }
}

export async function createProductHandler(
  req: Request<{}, {}, createProductInput>,
  res: Response,
  next: NextFunction
) {
  try {
    res.locals.func = 'createProductHandler';
    const body = {
      id: 1,
      name: req.body.name,
      oldPrice: +req.body.oldPrice,
      newPrice: +req.body.newPrice,
      category: req.body.category,
      image: req.body.image,
    };
    const products = await findProductAll();

    if (products.length > 0) {
      const lastProduct = products.slice(-1)[0];
      body.id = lastProduct.id + 1;
    }

    const product = await createProduct(body);
    const result = omit(product.toJSON(), privateFields);

    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function removeProductHandler(
  req: Request<removeProductInput>,
  res: Response,
  next: NextFunction
) {
  try {
    res.locals.func = 'removeProductHandler';
    const result = await removeProduct(+req.params.id);

    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    next(error);
  }
}
