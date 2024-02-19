import { Component, Input, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  @Input() category: string;
  private productService = inject(ProductService);
  private subscription = new Subscription();

  pathImage: string = '';
  products: Product[];

  ngOnInit(): void {
    this.subscription = this.productService
      .getProductListener()
      .subscribe((products: Product[]) => {
        this.products = products.filter(
          (product) => product.category === this.category
        );
        if (this.category === 'men') this.pathImage = 'assets/banner_mens.png';
        if (this.category === 'women')
          this.pathImage = 'assets/banner_womens.png';
        if (this.category === 'kid') this.pathImage = 'assets/banner_kids.png';
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
