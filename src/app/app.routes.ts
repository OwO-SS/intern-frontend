import { Routes } from '@angular/router';
import { ItemList } from './pages/item-list/item-list';
import { ItemForm } from './pages/item-form/item-form';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: ItemList },
  { path: 'items/create', component: ItemForm },
  { path: 'items/edit/:id', component: ItemForm },
  { path: 'dashboard', component: Dashboard },
];