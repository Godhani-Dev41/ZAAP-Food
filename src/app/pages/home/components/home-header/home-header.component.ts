import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from 'src/app/services/cart-data.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  tableNumber: number;
  plateCount: number;

  constructor(
    private router: Router,
    private cartDataService: CartDataService
  ) {}

  ngOnInit() {
    this.tableNumber = 14;
    this.cartDataService.getProductsInCart().subscribe((products) => {
      const meta = this.cartDataService.getMetaInfoByProducts(products);
      this.plateCount = meta.totalItemCount;
    });
  }

  navigateToProductCart(): void {
    this.router.navigate(['home', 'cart']);
  }
}
