import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FoodItemDetailComponent } from './pages/home/components/food-item-detail/food-item-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home/category-product',
    component: FoodItemDetailComponent,
  },
  {
    path: 'home/product-by-zone',
    loadChildren: () =>
      import(
        '../app/pages/home/components/products-by-zone/products-by-zone.module'
      ).then((m) => m.ProductByZoneModule),
  },
  {
    path: 'home/categories/collections',
    loadChildren: () =>
      import(
        '../app/pages/home/components/categories-collections/categories-collections.module'
      ).then((m) => m.CategoriesCollectionsModule),
  },
  {
    path: 'home/cart',
    loadChildren: () =>
      import('../app/pages/products-cart/products-cart.module').then(
        (m) => m.ProductsCartModule
      ),
  },
  {
    path: 'home/place-order',
    loadChildren: () =>
      import('./pages/place-order/place-order.module').then(
        (m) => m.PlaceOrderModule
      ),
  },
  {
    path: 'order/place-order',
    loadChildren: () =>
      import('./pages/place-order/place-order.module').then(
        (m) => m.PlaceOrderModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'service',
    loadChildren: () =>
      import('./pages/service-bell/service-bell.module').then(
        (m) => m.ServiceBellModule
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./pages/order/order.module').then((m) => m.OrderModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
