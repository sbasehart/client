import { Component } from '@angular/core';

/**
 * Generated class for the ItemEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-edit',
  templateUrl: 'item-edit.html'
})
export class ItemEditComponent {

  text: string;

  constructor() {
    console.log('Hello ItemEditComponent Component');
    this.text = 'Hello World';
  }

}
