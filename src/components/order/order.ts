import { Component } from '@angular/core';

/**
 * Generated class for the OrderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'order',
  templateUrl: 'order.html'
})
export class OrderComponent {

  text: string;

  constructor() {
    console.log('Hello OrderComponent Component');
    this.text = 'Hello World';
  }

}
