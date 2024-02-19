import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductApiService } from '../../../services/product-api.service';
import { Product } from '../../../shared/models/product.model';

export const productDetailResolver: ResolveFn<Product[]> = (route, state) => {
  const productService = inject(ProductService);
  const productApiService = inject(ProductApiService);
  const products = productService.getAllProduct();

  if (products.length <= 0) return productApiService.getProducts();
  return products;
};
