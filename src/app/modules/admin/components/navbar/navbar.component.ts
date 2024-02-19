import { Component, inject } from '@angular/core';
import { ProductApiService } from '../../../services/product-api.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private productApiService = inject(ProductApiService);

  constructor() {
    this.productApiService.getProducts().subscribe();
  }
}
