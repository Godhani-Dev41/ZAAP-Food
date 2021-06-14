import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IZYCCategory } from 'src/app/models/category.model';
import { CategoryDataService } from 'src/app/services/category-data.service';

@Component({
  selector: 'app-categories-collections',
  templateUrl: './categories-collections.component.html',
  styleUrls: ['./categories-collections.component.scss'],
})
export class CategoriesCollectionsComponent implements OnInit {
  categoriesCollection$: Observable<IZYCCategory[]>;
  categoriesCollection = [];

  constructor(
    private router: Router,
    private location: Location,
    private categoryDataService: CategoryDataService
  ) {}

  ngOnInit() {
    this.categoriesCollection$ = this.categoryDataService.getCategories();
    this.categoriesCollection$.subscribe((res) => {
      console.log({ res });
      this.categoriesCollection = res;
    });
  }

  searchProduct(event: any): void {
    const itemName = event.target.value;
    const filteredItems = this.categoriesCollection.reduce((arr, product) => {
      arr = product.categoryName.toLowerCase().includes(itemName)
        ? [...arr, product]
        : arr;
      return arr;
    }, []);

    this.categoriesCollection$ = of(filteredItems);
  }

  navigateToBack(): void {
    this.location.back();
  }

  navigateToProcudtByCategoryZone(zoneName: string): void {
    this.router.navigate(['home', 'product-by-zone'], {
      queryParams: { zoneName: btoa(zoneName) },
      state: { zoneName },
    });
  }
}
