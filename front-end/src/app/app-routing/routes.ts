import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { RugdetailComponent } from '../rugdetail/rugdetail.component';

export const routes: Routes = [
  { path: 'home',     component: MenuComponent },
  { path: 'rugdetail/:id', component: RugdetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
