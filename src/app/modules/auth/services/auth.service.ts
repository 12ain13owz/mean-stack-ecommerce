import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.development';
import { Login, ResponseAuth, SignUp, User } from '../models/account.model';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { CartApiService } from '../../services/cart-api.service';
import { ProductService } from '../../services/product.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  private http = inject(HttpClient);
  private router = inject(Router);
  private productSerivce = inject(ProductService);
  private cartService = inject(CartService);
  private cartApiService = inject(CartApiService);
  private user = new BehaviorSubject<User>(null);

  login(payload: Login): Observable<ResponseAuth> {
    return this.http.post<ResponseAuth>(this.apiUrl + '/login', payload).pipe(
      tap((res) => this.handlerAuthentication(res.token)),
      tap(() => this.handlerCart())
    );
  }

  signup(payload: SignUp): Observable<ResponseAuth> {
    return this.http
      .post<ResponseAuth>(this.apiUrl + '/signup', payload)
      .pipe(tap((res) => this.handlerAuthentication(res.token)));
  }

  handlerAuthentication(token: string) {
    localStorage.setItem('auth-token', token);
    this.router.navigate(['/']);
  }

  handlerCart() {
    this.cartApiService.getCartApi().subscribe((cart: number[]) => {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i] <= 0) continue;

        const product = this.productSerivce.getProduct(i);
        if (product) this.cartService.addToCart(product, cart[i]);
      }
    });
  }

  userListener(): Observable<User> {
    return this.user.asObservable();
  }
}
