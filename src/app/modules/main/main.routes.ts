import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ShopComponent } from './components/shop/shop.component';
import { KidsComponent } from './components/kids/kids.component';
import { WomenComponent } from './components/women/women.component';
import { MenComponent } from './components/men/men.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDeteilComponent } from './components/product-deteil/product-deteil.component';
import { productDetailResolver } from './components/product-deteil/product-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'shop', component: ShopComponent },
      { path: 'mens', component: MenComponent },
      { path: 'womens', component: WomenComponent },
      { path: 'kids', component: KidsComponent },
      { path: 'cart', component: CartComponent },
      {
        path: 'product/:id',
        component: ProductDeteilComponent,
        resolve: [productDetailResolver],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
