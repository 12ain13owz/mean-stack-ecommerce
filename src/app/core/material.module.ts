import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';

const MatFormFieldProvider = {
  provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
  useValue: { appearance: 'outline' },
};

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatBadgeModule,
  ],
  providers: [MatFormFieldProvider],
})
export class MaterialModule {}
