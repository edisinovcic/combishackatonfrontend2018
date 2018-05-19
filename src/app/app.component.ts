import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from './auth/authentication.service';
import { LoginDialogComponent } from './auth/login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  isLoggedIn: boolean;
  loginSubscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthenticationService, public dialog: MatDialog) {}

  ngOnInit(): void {
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

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '400px',
      data: { }
    });
  }

  logout() {
    this.authService.logout();
  }
}
