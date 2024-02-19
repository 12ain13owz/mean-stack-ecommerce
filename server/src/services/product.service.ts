import { Product, ProductModel } from '../models/product.model';

export function createProduct(input: Partial<Product>) {
  return ProductModel.create(input);
}

export function findProductAll() {
  return ProductModel.find({});
}

export function removeProduct(id: number) {
  return ProductModel.findOneAndDelete({ id: id });
}
