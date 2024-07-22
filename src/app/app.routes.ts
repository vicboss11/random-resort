import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'hoteles',
    title: 'Listado de Hoteles',
    loadComponent: () =>
      import('./features/hotels/pages/hotel-list/hotel-list.component'),
  },
  {
    path: '',
    redirectTo: '/hoteles',
    pathMatch: 'full',
  },
];
