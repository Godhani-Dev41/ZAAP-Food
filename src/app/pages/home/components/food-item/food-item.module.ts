import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDataService } from 'src/app/services/category-data.service';
import { FoodItemComponent } from './food-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FoodItemComponent],
  providers: [CategoryDataService],
  exports: [FoodItemComponent]
})
export class FoodItemModule { }
