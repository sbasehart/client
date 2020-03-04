import { Component, OnInit, NgModule } from '@angular/core';
import { Location } from "../../components/location/location.model";
import { NavController, NavParams, IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
     ComponentsModule,
  ],
})
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
}
