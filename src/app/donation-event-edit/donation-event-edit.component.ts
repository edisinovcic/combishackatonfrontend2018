import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DonationEvent } from '../shared/donation-event.model';
import { DonationEventService } from '../services/donation-event.service';

@Component({
  selector: 'app-donation-event-edit',
  templateUrl: './donation-event-edit.component.html',
  styleUrls: ['./donation-event-edit.component.css']
})
export class DonationEventEditComponent implements OnInit {

  lat;
  lng;

  constructor(private donationEventService: DonationEventService) { }

  ngOnInit() {
  }

  onMapClick(event: MouseEvent) {
    const coords = event['coords'];
    this.lat = coords.lat;
    this.lng = coords.lng;
  }

  onSubmit(form: NgForm) {
    const formControls = form.form.value;
    const event: DonationEvent = new DonationEvent();
    event.description = formControls.description;
    event.address = formControls.address;
    event.latitude = this.lat;
    event.longitude = this.lng;

    this.donationEventService.createDonationEvent(event)
      .subscribe(response => {
        console.log(response);
      });
  }

}
