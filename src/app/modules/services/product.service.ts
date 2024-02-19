import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private product: Product[] = [];
  private product$ = new BehaviorSubject<Product[]>([]);

  constructor() {}

  getProductListener() {
    return this.product$.asObservable();
  }

  getAllProduct() {
    return [...this.product];
  }

  getProduct(id: number) {
    return this.product.find((product) => product.id === id);
  }

  getPopularProduct() {
    return this.product
      .filter((product) => product.category === 'women')
      .slice(0, 4);
  }

  getNewProduct() {
    return this.product.slice(-8);
  }

  setProducts(products: Product[]) {
    this.product = products;
    this.product$.next([...this.product]);
  }

  addProduct(product: Product) {
    this.product.push(product);
    this.product$.next([...this.product]);
  }

  removeProduct(id: number) {
    const index = this.product.findIndex((product) => product.id === id);
    this.product.splice(index, 1);
    this.product$.next([...this.product]);
  }
}
