import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ProductService } from './product.service';
import { Product } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  addProduct(formData: FormData): Observable<Product> {
    return this.http
      .post<Product>(this.apiUrl + 'product', formData)
      .pipe(tap((product: Product) => this.productService.addProduct(product)));
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.apiUrl + 'product')
      .pipe(
        tap((products: Product[]) => this.productService.setProducts(products))
      );
  }

  removeProduct(id: number) {
    return this.http
      .delete<Product>(this.apiUrl + 'product/' + id)
      .pipe(tap(() => this.productService.removeProduct(id)));
  }
}
