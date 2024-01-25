import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routes';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './components/shop/shop.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';
import { KidsComponent } from './components/kids/kids.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDeteilComponent } from './components/product-deteil/product-deteil.component';

@NgModule({
  declarations: [
    MainComponent,
    ShopComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    CartComponent,
    ProductDeteilComponent,
  ],
  imports: [MainRoutingModule, CoreModule, SharedModule],
})
export class MainModule {}
