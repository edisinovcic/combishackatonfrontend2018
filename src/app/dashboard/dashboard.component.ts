import { Component, OnInit } from '@angular/core';
import { DonationEventService } from '../services/donation-event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  filterMonth = 'this';

  constructor(private donationEventService: DonationEventService) { }

  ngOnInit() {
  }

  filter() {
    if (this.filterMonth === 'this') {
      const now = new Date();
      const month = now.getMonth();
      const year = now.getFullYear();
      const start = new Date(year, month, 1);
      const end = new Date(year, month + 1, 1);
      this.donationEventService.getBloodStock(start.toISOString().split('T')[0], end.toISOString().split('T')[0])
        .subscribe(response => {
          console.log(response);
        });
    }
  }

}
