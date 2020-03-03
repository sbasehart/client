import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

/**
 * Generated class for the ItemEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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
