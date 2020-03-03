import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'client-edit',
  templateUrl: 'client-edit.html'
})
export class ClientEditComponent {

  id: number;
  editMode = false;
  clientForm: FormGroup;

  constructor() {
    console.log('Hello ClientEditComponent Component');
  }

}
