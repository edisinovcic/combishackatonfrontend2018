import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertService } from '../shared/alert.service';
import { DonationEventService } from '../services/donation-event.service';
import { DonationEvent } from '../shared/donation-event.model';

@Component({
  selector: 'app-donation-event-view',
  templateUrl: './donation-event-view.component.html',
  styleUrls: ['./donation-event-view.component.css']
})
export class DonationEventViewComponent implements OnInit {
  donationEvent: DonationEvent;

  invites: any[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService,
              private donationEventService: DonationEventService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = params['id'];
            this.donationEventService.getDonationEvent(id)
              .subscribe(
                event => {
                  this.donationEvent = <DonationEvent>event['data'];
                  console.log(this.donationEvent);
                },
                error => {
                  if (error.status !== 200 || error.status !== 201) {
                    this.alertService.danger('Cannot fetch user data');
                  }
                }
              );

            this.donationEventService.getInvitesForEvent(id)
              .subscribe(response => {
                console.log(response);
                this.invites = response['data'];
              });
        }
      );
  }

  addDonator(email: string) {
    this.donationEventService.createDonationForUser(email, 'Donation')
      .subscribe(response => {
        console.log(response);
        this.alertService.success('Add donation to: ' + email);
      });
  }

}
