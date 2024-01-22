import { NgModule } from '@angular/core';

import { CoreModule } from '../../core/core.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CoreModule, RouterLink, RouterLinkActive],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}
