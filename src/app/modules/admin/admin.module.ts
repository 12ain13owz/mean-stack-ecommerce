import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routes';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

@NgModule({
  declarations: [AdminComponent, NavbarComponent, SidebarComponent, AddProductComponent, ListProductComponent],
  imports: [AdminRoutingModule, CoreModule, SharedModule],
})
export class AdminModule {}
