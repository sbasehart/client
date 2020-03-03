import { Component } from '@angular/core';

/**
 * Generated class for the OrderEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'order-edit',
  templateUrl: 'order-edit.html'
})
export class OrderEditComponent {

  text: string;

  constructor() {
    console.log('Hello OrderEditComponent Component');
    this.text = 'Hello World';
  }

}
