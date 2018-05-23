import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { User } from '../../shared/user.model';
import { UserService } from '../../services/user.service';
import { AuthResponse } from '../../services/auth-response.model';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {
  hide = true;

  constructor(private userService: UserService,
              private alertService: AlertService,
              public dialogRef: MatDialogRef<RegisterDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onSubmit(registerForm: NgForm) {
    const formControls = registerForm.form.value;

    const userData: User = <User>formControls;
    console.log(userData);
    this.userService.createUser(userData)
      .subscribe(response => {
        console.log(response);
        this.alertService.success('User registered. Please login now');
      });

    this.dialogRef.close();
  }

}
