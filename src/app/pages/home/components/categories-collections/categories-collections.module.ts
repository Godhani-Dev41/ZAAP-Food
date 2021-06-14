import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesCollectionsComponent } from './categories-collections.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CategoriesCollectionsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [CategoriesCollectionsComponent],
})
export class CategoriesCollectionsModule {}
