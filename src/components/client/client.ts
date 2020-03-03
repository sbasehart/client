import { Component } from '@angular/core';

/**
 * Generated class for the ClientComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'client',
  templateUrl: 'client.html'
})
export class ClientComponent {

  _id: string;
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  phone1: string;
  phone2: string;
  email: string;
  joinedDate: Date;
  leftDate: Date;
  notes: string;
  locations: Location[];

  constructor() {
    console.log('Hello ClientComponent Component');
  }

}
