import { Component, OnInit } from '@angular/core';
import { Location } from "../../components/location/location.model";
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage implements OnInit {
  locations: Location[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    
  }

  // itemTapped(event, location) {
  //   this.navCtrl.push(Location, {
  //     location: location
  //   });
  // }
}
