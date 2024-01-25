import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product.model';

import all_product from '../../../assets/all_product';
import popular_product from '../../../assets/data';
import new_product from '../../../assets/new_collections';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private product: Product[] = all_product;
  private popularProduct: Product[] = popular_product;
  private newProduct: Product[] = new_product;

  constructor() {}

  getAllProduct() {
    return [...this.product];
  }

  getProduct(id: number) {
    return this.product.find((product) => product.id === id);
  }

  getPopularProduct() {
    return [...this.popularProduct];
  }

  getNewProduct() {
    return [...this.newProduct];
  }
}
