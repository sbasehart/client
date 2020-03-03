import { Component } from '@angular/core';
import { Client } from './client.model';

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

  clients: Client[] = []

  constructor() {
    console.log('Hello ClientComponent Component');
  }

}
