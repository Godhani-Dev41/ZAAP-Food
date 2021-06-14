import { ITimeDetails } from './shared.model';

export interface ICartMeta {
  totalPrice: number;
  totalItemCount: number;
  totalIngredientPrice: number;
  totalPriceIgnoringIngredient: number;
}

export interface IZYCProduct {
  catergoriesList: string[];
  ingredient: IIngredient[];
  status: number;
  createdAt: ITimeDetails;
  modifier: IModifier[];
  calories: number;
  seqNumber: number;
  foodAt: string[];
  categoryName: string;
  shortDescription: string;
  key: string;
  itemName: string;
  updatedAt: ITimeDetails;
  itemPrice: number;
  taxGST: number;
  itemImage: string;
  itemCount: number;
  aboutDish: string;
  discountPercent: number;
  foodType: string;
  zoneCode: string;
  specialRequest: string;
  /** for use in cart */
  cartId?: string;
  ingredientsIncluded?: boolean;
  addToCartTime?: Date;
}

export interface IIngredient {
  extraPrice: number;
  extraName: string;
  /** for use in cart */
  include?: boolean;
}

export interface IModifier {
  status: number;
  title: string;
  type: string;
  required: number;
  list: string;
}
