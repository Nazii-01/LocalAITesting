import { Routes } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: '/shops', pathMatch: 'full' },
  { path: 'shops', component: ShopListComponent },
  { path: 'shop/:id', component: ShopDetailsComponent },
  { path: 'cart', component: CartComponent }
];