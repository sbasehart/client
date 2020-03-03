import { Component } from '@angular/core';

/**
 * Generated class for the OrderDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'order-details',
  templateUrl: 'order-details.html'
})
export class OrderDetailsComponent {

  text: string;

  constructor() {
    console.log('Hello OrderDetailsComponent Component');
    this.text = 'Hello World';
  }

}
