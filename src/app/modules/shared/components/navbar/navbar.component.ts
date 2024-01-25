import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  private cartService = inject(CartService);
  count: number = 0;
  toggle: boolean = false;

  ngOnInit(): void {
    this.subscription = this.cartService.cart$.subscribe((cart) => {
      this.count = cart.length;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onToggle() {
    this.toggle = !this.toggle;
  }

  // private breakpointObserver = inject(BreakpointObserver);

  // isHandset$: Observable<boolean> = this.breakpointObserver
  //   .observe(Breakpoints.Handset)
  //   .pipe(
  //     map((result) => result.matches),
  //     shareReplay()
  //   );
}
