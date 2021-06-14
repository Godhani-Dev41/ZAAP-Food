import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryDataService } from 'src/app/services/category-data.service';

@Component({
  selector: 'app-food-categories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.scss'],
})
export class FoodCategoriesComponent implements OnInit {
  categories$: Observable<any>;

  constructor(
    private db: AngularFirestore,
    private router: Router,
    private categoryDataService: CategoryDataService
  ) {}

  ngOnInit() {
    this.categories$ = this.categoryDataService.getCategoriesZone();
  }

  navigateToProcudtByCategoryZone(zoneName: string): void {
    this.router.navigate(['home', 'product-by-zone'], {
      queryParams: { zoneName: btoa(zoneName) },
      state: { zoneName },
    });
  }
}
