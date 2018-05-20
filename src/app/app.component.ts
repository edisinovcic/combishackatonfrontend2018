import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from './auth/authentication.service';
import { LoginDialogComponent } from './auth/login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material';
import { RegisterDialogComponent } from './auth/register-dialog/register-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  isLoggedIn: boolean;
  loginSubscription: Subscription;

  isDarkTheme = false;

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthenticationService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.isDarkTheme = JSON.parse(localStorage.getItem('theme')).dark;
    this.isLoggedIn = this.authService.isLoggedIn();

    this.loginSubscription = this.authService.userLoggedIn.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '400px',
      data: { }
    });
  }

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      width: '400px',
      data: { }
    });
  }

  logout() {
    this.authService.logout();
  }

  changeTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('theme', JSON.stringify({dark: this.isDarkTheme}));
  }
}
