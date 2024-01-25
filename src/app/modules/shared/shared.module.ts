import { NgModule } from '@angular/core';

import { CoreModule } from '../../core/core.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    CategoryComponent,
  ],
  imports: [CoreModule, RouterLink, RouterLinkActive],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    CategoryComponent,
  ],
})
export class SharedModule {}
