import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from '../shared/models/cart.model';
import { tap } from 'rxjs';
import { CartService } from './cart.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartApiService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private cartSerivce: CartService,
    private productService: ProductService
  ) {}

  getCartApi() {
    const token = localStorage.getItem('auth-token');
    return this.http.post(this.apiUrl + '/getcart', null, {
      headers: new HttpHeaders({
        'auth-token': token,
      }),
    });
  }

  addCartApi(id: number) {
    const token = localStorage.getItem('auth-token');
    return this.http
      .post(
        this.apiUrl + '/addcart',
        { id: id },
        {
          headers: new HttpHeaders({
            'auth-token': token,
          }),
        }
      )
      .pipe(
        tap((res: any) => {
          const product = this.productService.getProduct(id);
          if (product) this.cartSerivce.addToCart(product, res.quantity);
        })
      );
  }

  removeCartApi(id: number) {
    const token = localStorage.getItem('auth-token');
    return this.http
      .post(
        this.apiUrl + '/removecart',
        { id: id },
        {
          headers: new HttpHeaders({
            'auth-token': token,
          }),
        }
      )
      .pipe(tap(() => this.cartSerivce.deleteCart(id)));
  }
}
