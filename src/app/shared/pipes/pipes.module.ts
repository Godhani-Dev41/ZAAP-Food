import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraIngredientStringPipe } from './extra-ingredient-string.pipe';

@NgModule({
  declarations: [ExtraIngredientStringPipe],
  imports: [
    CommonModule
  ],
  exports: [ExtraIngredientStringPipe]
})
export class PipesModule { }
