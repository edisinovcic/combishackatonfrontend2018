import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
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

  createUser(user: User): Observable<any> {
    return this.http.post('/api/v1/users', user, UserService.getHeaders());
  }

  getUser(id: string): void {
  }

  getAllUsers() {
    return this.http.get('/api/v1/users', UserService.getHeadersWithAuth());
  }
}
