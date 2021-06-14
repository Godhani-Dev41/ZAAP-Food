import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDataService } from 'src/app/services/category-data.service';
import { ProductsByZoneComponent } from './products-by-zone.component';
import { FoodItemModule } from '../food-item/food-item.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsByZoneComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FoodItemModule],
  declarations: [ProductsByZoneComponent],
  providers: [],
})
export class ProductByZoneModule {}
