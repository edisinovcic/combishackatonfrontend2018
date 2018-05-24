import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation-event-edit',
  templateUrl: './donation-event-edit.component.html',
  styleUrls: ['./donation-event-edit.component.css']
})
export class DonationEventEditComponent implements OnInit {

  lat;
  lng;

  constructor() { }

  ngOnInit() {
  }

  onMapClick(event: MouseEvent) {
    const coords = event['coords'];
    this.lat = coords.lat;
    this.lng = coords.lng;
  }

}
