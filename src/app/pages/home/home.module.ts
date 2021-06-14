import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { FoodItemDetailComponent } from './components/food-item-detail/food-item-detail.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CategoryDataService } from 'src/app/services/category-data.service';
import { FoodItemModule } from './components/food-item/food-item.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'categories',
        loadChildren: () =>
          import('./components/food-categories/food-categories.module').then(
            (m) => m.FoodCategoriesModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'categories',
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, FoodItemModule, RouterModule.forChild(routes), ModalModule, FormsModule],
  declarations: [HomeComponent, HomeHeaderComponent, FoodItemDetailComponent],
  providers: []
})
export class HomeModule { }
