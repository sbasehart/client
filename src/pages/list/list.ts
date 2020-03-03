import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  names: string[]
  items: Array<{name: string, qty: number, priceeach: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.names = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build']
    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        name: this.names[Math.floor(Math.random() * this.names.length)],
        qty: Math.floor(Math.random() * 6) + 1,
        priceeach: Math.floor(Math.random() * 35) + 1
      });
      console.log(this.items)
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
