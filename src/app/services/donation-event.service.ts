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

  getBloodStock(start: string, end: string) {
    return this.http.get(`/api/v1/blood-stock/between?s=${start}&e=${end}`, DonationEventService.getHeadersWithAuth());
  }

  getBlockStockByGroup(group: string) {
    return this.http.get(`/api/v1/blood-stock/blood-group/${group}`, DonationEventService.getHeadersWithAuth());
  }

  createDonationForUser(email: string, description: string) {
    return this.http.post('/api/v1/user-donation', {email: email, description: description}, DonationEventService.getHeadersWithAuth());
  }

  getInvitesForEvent(eventId: string) {
    return this.http.get('/api/v1/invites/event/' + eventId, DonationEventService.getHeadersWithAuth());
  }
}
