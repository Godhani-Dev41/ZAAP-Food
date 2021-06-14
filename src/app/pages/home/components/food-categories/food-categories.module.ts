import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodCategoriesComponent } from './food-categories.component';
import { RouterModule, Routes } from '@angular/router';
import { FoodItemDetailComponent } from '../food-item-detail/food-item-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FoodCategoriesComponent,
    children: [
      {
        path: 'product',
        component: FoodItemDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [FoodCategoriesComponent],
})
export class FoodCategoriesModule {}
