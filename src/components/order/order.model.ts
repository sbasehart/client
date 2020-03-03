import { Item } from '../item/item.model';
import { location } from '../location/location.model'

export class Recipe {
    public _id: string;
    public customerId: string;
    public salesPerson: string;
    public status: string
    public soNumber: number;
    public itemCount: number;
    public items: Item[];
    public orderDate: Date;
    public pickupDate: Date;
    public deliverDate: Date;
    public orderAmount: number;
    public receiptImageLocation: string;
    public receiptNotes: string;
    public rating: any;
    public clientId: string;
    public clientLocationId: string;
    public isPickedUp: boolean;
    public isDelivered: boolean;

  constructor(
    customerId: string,
    salesPerson: string,
    status: string,
    soNumber: number,
    itemCount: number,
    items: Item[],
    orderDate: Date,
    pickupDate: Date,
    deliverDate: Date,
    orderAmount: number,
    receiptImageLocation: string,
    receiptNotes: string,
    rating: any,
    clientId: string,
    clientLocationId: string,
    isPickedUp: boolean,
    isDelivered: boolean,
  ) {
    this.customerId = customerId;
    this.salesPerson = salesPerson;
    this.status = status;
    this.soNumber = soNumber;
    this.itemCount = itemCount;
    this.items = items;
    this.orderDate = orderDate;
    this.pickupDate = pickupDate;
    this.deliverDate = deliverDate;
    this.orderAmount = orderAmount;
    this.receiptImageLocation = receiptImageLocation;
    this.receiptNotes = receiptNotes;
    this.rating = rating;
    this.clientId = clientId;
    this.clientLocationId = clientLocationId;
    this.isPickedUp = isPickedUp;
    this.isDelivered = isDelivered;
  }
}