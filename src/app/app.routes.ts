import { Routes } from '@angular/router';
// import { authGuard } from '@Guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('@Pages/home.component'),
    // canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('@Pages/login.component'),
  },
  {
    path: 'team',
    loadComponent: () => import('@Pages/team.component'),
  },
];
