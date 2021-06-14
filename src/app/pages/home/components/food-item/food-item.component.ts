import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
})
export class FoodItemComponent implements OnInit {
  @Input() item: any;
  isItemClicked = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  openFoodItemDetail(): void {
    this.router.navigate(['home', 'category-product'], {
      state: { key: this.item.key },
      queryParams: { key: btoa(this.item.key) },
    });
  }
}
