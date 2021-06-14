import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ICartMeta } from 'src/app/models/product.model';
import { CartDataService } from 'src/app/services/cart-data.service';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.scss'],
})
export class ProductsCartComponent implements OnInit, OnDestroy {
  cartProducts$: Observable<any>;
  tableNumber = 10;
  date: Date;
  products: any;
  cartMeta: ICartMeta;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  constructor(
    private router: Router,
    private cartDataService: CartDataService
  ) {}

  ngOnInit() {
    this.cartProducts$ = this.cartDataService.getProductsInCart();
    this.date = new Date();
    this.cartProducts$.pipe(takeUntil(this.destroyed$)).subscribe((val) => {
      console.log({ val });
      this.products = val ?? [];
      this.cartMeta = this.cartDataService.getMetaInfoByProducts(this.products);
    });
  }

  updateItemCount(product, countToAdd: number) {
    const newCount = product.itemCount + countToAdd;
    if (newCount > 0) {
      this.cartDataService.updateItemInCart(product.cartId, {
        ...product,
        itemCount: newCount,
      });
    }
  }

  removeItem(key: string) {
    this.cartDataService.removeItemFromCart(key);
  }

  navigateToHome(): void {
    this.router.navigate(['home']);
  }

  onPlaceOrder() {
    this.router.navigate(['home', 'place-order']);
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
