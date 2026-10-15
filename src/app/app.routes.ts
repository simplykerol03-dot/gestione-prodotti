import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent,
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/products/product-list/product-list.component').then(m => m.ProductListComponent),
          },
          {
            path: 'new',
            loadComponent: () =>
              import('./features/products/product-form/product-form.component').then(m => m.ProductFormComponent),
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./features/products/product-form/product-form.component').then(m => m.ProductFormComponent),
          },
        ],
      },
    ],
  },
  { path: '**', redirectTo: '' },
];