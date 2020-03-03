import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: 'location.html'
})
export class LocationComponent implements OnInit {
  location: Location[] = []
  constructor() {}

  ngOnInit() {}

}
