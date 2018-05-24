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

  updateUser(user: User): Observable<any> {
    return this.http.put('/api/v1/users', user, UserService.getHeadersWithAuth());
  }

  createQuestionForUser(question: string) {
    return this.http.post('/api/v1/questions', {description: question}, UserService.getHeadersWithAuth());
  }

  getAllQuestions() {
    return this.http.get('/api/v1/questions', UserService.getHeadersWithAuth());
  }

  getUser(id: string) {
    return this.http.get(`/api/v1/users/${id}`, UserService.getHeadersWithAuth());
  }

  getAllUsers() {
    return this.http.get('/api/v1/users', UserService.getHeadersWithAuth());
  }

  getUserDonations(id: string) {
    return this.http.get(`/api/v1/user-donation/user/${id})`, UserService.getHeadersWithAuth());
  }

  getUserAnswers(id: string) {
    return this.http.get(`/api/v1/answers/user/${id}`, UserService.getHeadersWithAuth());
  }
}
