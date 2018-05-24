import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DonationEvent } from '../shared/donation-event.model';

@Injectable()
export class DonationEventService {
  constructor(private http: HttpClient) {}

  private static getHeaders() {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return {
      headers: headers
    };
  }

  private static getHeadersWithAuth() {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', sessionStorage.getItem('jwtToken'));

    return {
      headers: headers
    };
  }

  createDonationEvent(donationEvent: DonationEvent) {
    return this.http.post('/api/v1/donation-events', donationEvent, DonationEventService.getHeadersWithAuth());
  }

  getAllDonationEvents() {
    return this.http.get('/api/v1/donation-events', DonationEventService.getHeadersWithAuth());
  }

  getDonationEvent(id: string) {
    return this.http.get(`/api/v1/donation-events/${id}`, DonationEventService.getHeadersWithAuth());
  }
}
