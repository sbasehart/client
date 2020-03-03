import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'item-edit',
  templateUrl: 'item-edit.html'
})
export class ItemEditComponent {

  id: number;
  editMode = false;
  ItemForm: FormGroup;

  constructor() {
    console.log('Hello ItemEditComponent Component');
  }

}
