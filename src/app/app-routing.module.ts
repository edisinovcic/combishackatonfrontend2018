import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonorsListComponent } from './donors-list/donors-list.component';
import { BloodDonationsComponent } from './blood-donations/blood-donations.component';
import { DonorEditComponent } from './donor-edit/donor-edit.component';
import { DonationEventEditComponent } from './donation-event-edit/donation-event-edit.component';
import { DonationEventViewComponent } from './donation-event-view/donation-event-view.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { QrcodeReaderComponent } from './qrcode-reader/qrcode-reader.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'donors', component: DonorsListComponent },
  { path: 'donors/new', component: DonorEditComponent },
  { path: 'donors/:id', component: DonorEditComponent },
  { path: 'blood-donations', component: BloodDonationsComponent },
  { path: 'blood-donations/new', component: DonationEventEditComponent },
  { path: 'blood-donations/:id', component: DonationEventViewComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'qrcode-reader', component: QrcodeReaderComponent },
  { path: 'map', component: MapComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
