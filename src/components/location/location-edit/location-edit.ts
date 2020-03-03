import { Component } from '@angular/core';

/**
 * Generated class for the LocationEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'location-edit',
  templateUrl: 'location-edit.html'
})
export class LocationEditComponent {

  text: string;

  constructor() {
    console.log('Hello LocationEditComponent Component');
    this.text = 'Hello World';
  }

}
