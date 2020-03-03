import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';

@Component({
  selector: 'order-edit',
  templateUrl: 'order-edit.html'
})
export class OrderEditComponent implements OnInit{
  orders: Order[]= []

  constructor() {
    console.log('Hello OrderEditComponent Component');
  }

  ngOnInit() {

  }

}
