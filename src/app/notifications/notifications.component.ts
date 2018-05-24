import { Component, OnInit } from '@angular/core';
import { AlertService } from '../shared/alert.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.alertService.success('Notification sent');
  }

}
