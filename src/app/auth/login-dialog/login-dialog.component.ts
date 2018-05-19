import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  hide = true;

  constructor(private authService: AuthenticationService,
              public dialogRef: MatDialogRef<LoginDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    const formControls = loginForm.form.value;

    const email: string = formControls.email;
    const password: string = formControls.password;

    this.authService.login(email, password);
    this.dialogRef.close();
  }

}
