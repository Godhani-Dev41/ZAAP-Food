import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IZYCProduct } from 'src/app/models/product.model';
import { CategoryDataService } from 'src/app/services/category-data.service';

@Component({
  selector: 'app-products-by-zone',
  templateUrl: './products-by-zone.component.html',
  styleUrls: ['./products-by-zone.component.scss'],
})
export class ProductsByZoneComponent implements OnInit {
  zoneName: string;
  productsByZone$: Observable<IZYCProduct[]>;
  productsByZoneList: IZYCProduct[] = [];

  constructor(
    public categoryDataService: CategoryDataService,
    private router: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    try {
      this.zoneName = atob(this.router.snapshot.queryParams?.zoneName);
    } catch (e) {}
    this.productsByZone$ = this.categoryDataService.getProductByZoneName(
      this.zoneName
    );
    this.productsByZone$.subscribe((val) => {
      this.productsByZoneList = val;
    });
  }

  navigateToBack(): void {
    this.location.back();
  }

  searchProduct(event: any): void {
    const itemName = event.target.value;
    const filteredItems = this.productsByZoneList.reduce((arr, product) => {
      arr = product.itemName.toLowerCase().includes(itemName)
        ? [...arr, product]
        : arr;
      return arr;
    }, []);

    this.productsByZone$ = of(filteredItems);
  }
}
