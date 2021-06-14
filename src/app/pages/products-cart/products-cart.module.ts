import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBarModule } from 'src/app/components/top-nav-bar/top-nav-bar.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ProductsCartComponent } from './products-cart.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsCartComponent,
  },
];

@NgModule({
  imports: [CommonModule, TopNavBarModule, RouterModule.forChild(routes), FormsModule, PipesModule],
  declarations: [ProductsCartComponent],
  exports: [ProductsCartComponent],
})
export class ProductsCartModule { }
