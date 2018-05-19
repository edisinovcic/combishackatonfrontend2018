import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AlertService } from '../shared/alert.service';

@Injectable()
export class AuthenticationService {
  userLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router, private alertService: AlertService) {}

  static getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + sessionStorage.getItem('jwtToken'));
  }

  login(email: string, password: string): void {
    const requestBody = {
      email: email,
      password: password
    };

    this.http.post('/api/login', requestBody)
      .subscribe((response: any) => {
        console.log(`JWT token: ${response.jwtToken}`);
        sessionStorage.setItem('jwtToken', response.jwtToken);
        this.userLoggedIn.next(true);
        this.alertService.success('Successfully signed in');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.alertService.danger(error.message);
      });
  }

  logout(): void {
    this.http.get('/api/logout', {headers: AuthenticationService.getHeaders()})
      .subscribe(() => {
        sessionStorage.removeItem('jwtToken');
        this.userLoggedIn.next(false);
        this.alertService.success('Successfully signed out');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.alertService.danger(error);
      });
  }

  clearData() {
    sessionStorage.removeItem('jwtToken');
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    return sessionStorage.getItem('jwtToken') != null;
  }
}
