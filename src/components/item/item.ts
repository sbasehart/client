import { Component } from '@angular/core';
import { Item } from 'ionic-angular';

@Component({
  selector: 'item',
  templateUrl: 'item.html'
})
export class ItemComponent {

  items: Item[] = []

  constructor() {
    console.log('Hello ItemComponent Component');
  }

}
