import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blood-donations',
  templateUrl: './blood-donations.component.html',
  styleUrls: ['./blood-donations.component.css']
})
export class BloodDonationsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAddNewDonationEvent() {
    this.router.navigate(['/blood-donations/new']);
  }

}
