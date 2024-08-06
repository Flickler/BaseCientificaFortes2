import { Routes } from '@angular/router';
import { authGuard, notAuthGuard } from '@Guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('@Pages/home.component'),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('@Pages/login.component'),
    canActivate: [notAuthGuard],
  },
  {
    path: 'team',
    loadComponent: () => import('@Pages/team.component'),
    canActivate: [authGuard],
  },
  {
    path: 'report',
    loadComponent: () => import('@Pages/report.component'),
    canActivate: [authGuard],
  },
];
