import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    const formControls = loginForm.form.value;

    const email: string = formControls.email;
    const password: string = formControls.password;

    this.authService.login(email, password);
  }

}
