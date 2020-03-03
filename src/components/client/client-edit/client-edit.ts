import { Component } from '@angular/core';

/**
 * Generated class for the ClientEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'client-edit',
  templateUrl: 'client-edit.html'
})
export class ClientEditComponent {

  text: string;

  constructor() {
    console.log('Hello ClientEditComponent Component');
    this.text = 'Hello World';
  }

}
