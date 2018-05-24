import { Component, OnInit } from '@angular/core';
import { DonationEventService } from '../services/donation-event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  filterMonth = 'this';

  am = 0;
  ap = 0;
  bm = 0;
  bp = 0;
  abm = 0;
  abp = 0;
  zm = 0;
  zp = 0;

  amv = 42;
  apv = 110;
  bmv = 35;
  bpv = 21;
  abmv = 7;
  abpv = 14;
  zmv = 35;
  zpv = 105;

  supplies: any[] = [];

  constructor(private donationEventService: DonationEventService) { }

  ngOnInit() {
    // this.donationEventService.getBlockStockByGroup('A-')
    //   .subscribe(response => {
    //     this.aminus = response['data'];
    //   });
  }

  filter() {
    if (this.filterMonth === 'this') {
      const now = new Date();
      const month = now.getMonth();
      const year = now.getFullYear();
      const start = new Date(year, month, 1);
      const end = new Date(year, month + 1, 1);

      const startDate = start.toISOString().split('T')[0];
      const endDate = end.toISOString().split('T')[0];

      const st = startDate.split('-');
      const et = endDate.split('-');
      this.donationEventService.getBloodStock(`${st[2]}-${st[1]}-${st[0]}`, `${et[2]}-${et[1]}-${et[0]}`)
        .subscribe(response => {
          this.supplies = response['data'];
          this.processSupplies();
        });
    }
  }

  processSupplies() {
    this.supplies.forEach(s => {
      switch (s.bloodGroup) {
        case 'A-':
          this.am += s.amount;
          break;
        case 'A+':
          this.ap += s.amount;
          break;
        case 'B-':
          this.bm += s.amount;
          break;
        case 'B+':
          this.bp += s.amount;
          break;
        case 'AB-':
          this.abm += s.amount;
          break;
        case 'AB+':
          this.abp += s.amount;
          break;
        case '0-':
          this.zm += s.amount;
          break;
        case '0+':
          this.zp += s.amount;
          break;
      }

    });
  }

}
