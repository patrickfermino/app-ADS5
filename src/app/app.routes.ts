import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'detalhe/:id',
    loadComponent: () => import('./pages/detalhe/detalhe.page').then( m => m.DetalhePage)
  },
];
