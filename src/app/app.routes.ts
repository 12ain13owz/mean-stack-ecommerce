import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'shop', pathMatch: 'full' },

  {
    path: '',
    loadChildren: () =>
      import('./modules/main/main.module').then((m) => m.MainModule),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },

  { path: '**', component: PageNotFoundComponent },
];
