import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'location-edit',
  templateUrl: 'location-edit.html'
})
export class LocationEditComponent {

  id: number;
  editMode = false;
  locationForm: FormGroup;

  constructor() {
    console.log('Hello LocationEditComponent Component');
  }

}
