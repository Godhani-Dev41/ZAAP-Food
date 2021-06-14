import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICartMeta, IZYCProduct } from '../models/product.model';
import { UtilService } from './util.service';
@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  private cartProducts$: BehaviorSubject<IZYCProduct[]> = new BehaviorSubject<
    IZYCProduct[]
  >([]);

  constructor(private utilService: UtilService) {}

  addProductToCart(product: IZYCProduct[]): void {
    const currentCart = this.cartProducts$.getValue();
    // Add cartId for keep orders unique
    product.forEach((e) => {
      e.cartId = this.utilService.generateProductIdForCart(e);
      if (e.ingredient) {
        e.ingredientsIncluded = !!e.ingredient.find((a) => a.include);
      }
    });

    currentCart.forEach((cartItem, index) => {
      const productToOverride = product.find(
        (e) => cartItem.cartId === e.cartId
      );
      if (productToOverride) {
        currentCart.splice(index, 1);
      }
    });

    this.cartProducts$.next([...currentCart, ...product]);
  }

  getProductsInCart(): Observable<IZYCProduct[]> {
    return this.cartProducts$.asObservable();
  }

  getMetaInfoByProducts(products: IZYCProduct[]): ICartMeta {
    const totalItemCount = products.reduce((p, c) => c.itemCount + p, 0) ?? 0;
    let totalIngredientPrice = 0;
    const totalPriceIgnoringIngredient =
      products.reduce((p, c) => {
        const newTotal = c.itemCount * +c.itemPrice + p;
        if (c.ingredient && c.ingredient.length) {
          c.ingredient.forEach((ingredient) => {
            if (ingredient.include) {
              totalIngredientPrice += ingredient.extraPrice;
            }
          });
        }
        return newTotal;
      }, 0) ?? 0;

    return {
      totalItemCount,
      totalPriceIgnoringIngredient,
      totalPrice: totalPriceIgnoringIngredient + totalIngredientPrice,
      totalIngredientPrice,
    };
  }

  updateItemInCart(cartId: string, object: IZYCProduct) {
    const currCart = this.cartProducts$.getValue();
    const updatedCart = currCart.map((item) => {
      if (item.cartId === cartId) {
        delete object?.cartId;
        delete object?.key;
        return { ...item, ...object };
      } else {
        return { ...item };
      }
    });
    this.cartProducts$.next([...updatedCart]);
  }

  removeItemFromCart(cartId: string) {
    const currentCart = this.cartProducts$.getValue();
    const index = currentCart.findIndex((e) => e.cartId === cartId);
    if (index > -1) {
      currentCart.splice(index, 1);
      this.cartProducts$.next([...currentCart]);
    }
  }
}
