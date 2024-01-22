import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routes';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [AuthComponent, SigninComponent, SignupComponent],
  imports: [AuthRoutingModule, CoreModule, SharedModule],
})
export class AuthModule {}
