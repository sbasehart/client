import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'order-edit',
  templateUrl: 'order-edit.html'
})
export class OrderEditComponent implements OnInit{
  
  id: number;
  editMode = false;
  orderForm: FormGroup;

  constructor() {
    console.log('Hello OrderEditComponent Component');
  }

  ngOnInit() {

  }

}
