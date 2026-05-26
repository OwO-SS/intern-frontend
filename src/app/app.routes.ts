import { Routes } from '@angular/router';
import { ItemList } from './pages/item-list/item-list';
import { ItemForm } from './pages/item-form/item-form';
import { Dashboard } from './pages/dashboard/dashboard';

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

export const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: ItemList },
  { path: 'items/create', component: ItemForm },
  { path: 'items/edit/:id', component: ItemForm },
  { path: 'dashboard', component: Dashboard },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
];