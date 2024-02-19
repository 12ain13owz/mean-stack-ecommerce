import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartService } from '../../../services/cart.service';
import { ProductApiService } from '../../../services/product-api.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  private cartService = inject(CartService);
  private authService = inject(AuthService);
  private productApiService = inject(ProductApiService);
  private router = inject(Router);

  count: number = 0;
  toggle: boolean = false;
  token: string;

  ngOnInit(): void {
    this.subscription = this.cartService.getCartListener().subscribe((cart) => {
      this.count = cart.length;
    });
    this.productApiService.getProducts().subscribe();
    this.token = localStorage.getItem('auth-token');
    if (this.token) this.authService.handlerCart();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onToggle() {
    this.toggle = !this.toggle;
  }

  onLogout() {
    localStorage.removeItem('auth-token');
    this.token = '';
    this.cartService.removeProduct();
    this.router.navigate(['/']);
  }

  // private breakpointObserver = inject(BreakpointObserver);

  // isHandset$: Observable<boolean> = this.breakpointObserver
  //   .observe(Breakpoints.Handset)
  //   .pipe(
  //     map((result) => result.matches),
  //     shareReplay()
  //   );
}
