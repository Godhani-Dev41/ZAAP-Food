import { ITimeDetails } from './shared.model';

/**
 * Generated by https://app.quicktype.io/
 */
export interface IZYCOrder {
  acceptStatus: number;
  deliveredAt: ITimeDetails;
  userID: string;
  itemName: string;
  key: string;
  createdAt: ITimeDetails;
  tableNumber: string;
  billNumber: string;
  itemImage: string;
  itemID: string;
  quantity: number;
  taxGST: number;
  aboutExtra: string;
  remarkWaiter: string;
  updatedAt: ITimeDetails;
  cycleStatus: number;
  invoiceId: string;
  acceptedBy: string;
  itemPrice: number;
  zoneCode: string;
  status: number;
}
