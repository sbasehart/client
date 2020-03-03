import { Component } from '@angular/core';
import { Location } from "../../components/location/location.model";
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  names: string[]
  locations: Array<{name: string, qty: number, priceeach: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.names = ['desk', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build']
    this.locations = [];
    for(let i = 1; i < 11; i++) {
      this.locations.push({
        name: this.names[Math.floor(Math.random() * this.names.length)],
        qty: Math.floor(Math.random() * 6) + 1,
        priceeach: Math.floor(Math.random() * 35) + 1
      });
      console.log(this.locations)
    }
  }

  itemTapped(event, location) {
    this.navCtrl.push(Location, {
      location: location
    });
  }
}
