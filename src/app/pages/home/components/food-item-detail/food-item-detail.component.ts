import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IZYCProduct } from 'src/app/models/product.model';
import { CartDataService } from 'src/app/services/cart-data.service';
import { CategoryDataService } from 'src/app/services/category-data.service';

@Component({
  selector: 'app-food-item-detail',
  templateUrl: './food-item-detail.component.html',
  styleUrls: ['./food-item-detail.component.scss'],
})
export class FoodItemDetailComponent implements OnInit {
  itemDetail: IZYCProduct;
  modalRef: BsModalRef;
  itemPrice: number;
  itemCount = 1;

  constructor(
    private route: ActivatedRoute,
    private categoryDataService: CategoryDataService,
    private modalService: BsModalService,
    private location: Location,
    private router: Router,
    private cartDataService: CartDataService
  ) {}

  ngOnInit() {
    // console.log(window.history.state, 'state');
    let productKey;
    try {
      productKey = atob(this.route.snapshot.queryParams?.key);
    } catch (e) {}
    this.categoryDataService.getProductByKey(productKey).subscribe((val) => {
      if (!val) {
        this.router.navigateByUrl('/404');
      }
      this.itemDetail = val;
      console.log({ val });
      this.itemDetail.specialRequest = this.itemDetail.specialRequest ?? '';
      this.itemPrice = val.itemPrice;
    });
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-lg' })
    );
  }

  closeModal(): void {
    this.modalRef.hide();
  }

  changeItemCount(incr: boolean): void {
    if (incr) {
      if (this.itemPrice && this.itemCount > 0) {
        this.itemPrice = +this.itemPrice + +this.itemDetail.itemPrice;
        this.itemCount++;
      }
    } else if (this.itemCount > 1) {
      this.itemPrice = +this.itemPrice - +this.itemDetail.itemPrice;
      this.itemCount--;
    }
  }

  onClickAddExtraIcon(itemDetail, addition, index) {
    this.itemDetail.ingredient[index].include =
      !this.itemDetail.ingredient[index].include;
    if (this.itemDetail.ingredient[index].include) {
      this.itemPrice += this.itemDetail.ingredient[index].extraPrice;
    } else {
      this.itemPrice -= this.itemDetail.ingredient[index].extraPrice;
    }
  }

  navigateToBack(): void {
    this.location.back();
  }

  addProductToCart(): void {
    this.itemDetail.itemCount = this.itemCount;
    this.itemDetail.addToCartTime = new Date();
    this.cartDataService.addProductToCart([this.itemDetail]);
    this.router.navigate(['home', 'cart']);
  }
}
