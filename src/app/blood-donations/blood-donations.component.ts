import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationEventService } from '../services/donation-event.service';
import { DonationEvent } from '../shared/donation-event.model';

@Component({
  selector: 'app-blood-donations',
  templateUrl: './blood-donations.component.html',
  styleUrls: ['./blood-donations.component.css']
})
export class BloodDonationsComponent implements OnInit {
  displayedColumns = ['address', 'description', 'actions'];
  dataSource;

  constructor(private router: Router, private donationEventService: DonationEventService) { }

  ngOnInit() {
    this.donationEventService.getAllDonationEvents()
      .subscribe(response => {
        this.dataSource = <DonationEvent>response['data'];
      });
  }

  onAddNewDonationEvent() {
    this.router.navigate(['/blood-donations/new']);
  }

  onViewDonationEvent(id: string) {
    this.router.navigate([`/donation-events/${id}`]);
  }

}
