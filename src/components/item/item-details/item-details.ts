import { Component } from '@angular/core';

@Component({
  selector: 'item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsComponent {

  text: string;

  constructor() {
    console.log('Hello ItemDetailsComponent Component');
    this.text = 'Hello World';
  }

}
