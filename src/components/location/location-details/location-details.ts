import { Component } from '@angular/core';

/**
 * Generated class for the LocationDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'location-details',
  templateUrl: 'location-details.html'
})
export class LocationDetailsComponent {

  text: string;

  constructor() {
    console.log('Hello LocationDetailsComponent Component');
    this.text = 'Hello World';
  }

}
