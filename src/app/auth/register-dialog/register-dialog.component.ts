import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {
  hide = true;

  constructor(public dialogRef: MatDialogRef<RegisterDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onSubmit(registerForm: NgForm) {
    const formControls = registerForm.form.value;

    const email: string = formControls.email;
    const password: string = formControls.password;

    console.log(<User>formControls);
    this.dialogRef.close();
  }

}
