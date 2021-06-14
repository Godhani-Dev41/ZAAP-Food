import { ITimeDetails } from './shared.model';

export interface IZYCCategory {
  seqNumber: number;
  productList: string[];
  key: string;
  status: number;
  categoryImage: string;
  itemCount: number;
  createdAt: ITimeDetails;
  zoneCode: string;
  zoneImage: string;
  menuList: string[];
  categoryName: string;
  foodAt: string[];
}
