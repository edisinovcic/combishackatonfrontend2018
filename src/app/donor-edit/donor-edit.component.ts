import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertService } from '../shared/alert.service';
import { UserService } from '../services/user.service';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-donor-edit',
  templateUrl: './donor-edit.component.html',
  styleUrls: ['./donor-edit.component.css']
})
export class DonorEditComponent implements OnInit {
  id: string;
  editMode: boolean;

  startDate = new Date(1990, 0, 1);

  donor: User;
  donations: any[] = [];
  answers: any[] = [];

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  address: string;
  authorityGroup: string;
  bloodType: string;
  phoneNumber: string;
  yearOfBirth: Date;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService,
              private userService: UserService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          console.log(this.editMode);

          if (this.editMode) {
            this.userService.getUser(this.id)
              .subscribe(
                user => {
                  this.donor = <User>(user['data']);
                  this.firstName = this.donor.firstName;
                  this.lastName = this.donor.lastName;
                  this.email = this.donor.email;
                  this.address = this.donor.address;
                  this.authorityGroup = this.donor.authorityGroup;
                  this.bloodType = this.donor.bloodType;
                  this.gender = this.donor.gender;
                  this.yearOfBirth = new Date(this.donor.yearOfBirth);
                  this.phoneNumber = this.donor.phoneNumber;
                },
                error => {
                  if (error.status !== 200 || error.status !== 201) {
                    this.alertService.danger('Cannot fetch user data');
                  }
                }
              );
            this.userService.getUserDonations(this.id)
              .subscribe(donations => {
                this.donations = donations['data'];
              });
            this.userService.getUserAnswers(this.id)
              .subscribe(answers => {
                this.answers = answers['data'];
                console.log(this.answers);
              });
          }
        }
      );

  }

  onSubmit(registerForm: NgForm) {
    const formControls = registerForm.form.value;
    console.log(formControls);

    if (!this.editMode) {
      this.donor = new User();
      this.donor.firstName = this.firstName;
      this.donor.lastName = this.lastName;
      this.donor.email = this.email;
      this.donor.address = this.address;
      this.donor.authorityGroup = 'CUSTOMER';
      this.donor.bloodType = this.bloodType;
      this.donor.gender = this.gender;
      this.donor.yearOfBirth = this.yearOfBirth.getFullYear().toString();
      this.donor.password = '123456';
      this.donor.phoneNumber = this.phoneNumber;

      this.userService.createUser(this.donor)
        .subscribe(response => {
          console.log(response);
          this.alertService.success('User registered. Please login now');
          this.router.navigate(['/donors']);
        });
    } else {
      this.donor.firstName = this.firstName;
      this.donor.lastName = this.lastName;
      this.donor.email = this.email;
      this.donor.address = this.address;
      this.donor.bloodType = this.bloodType;
      this.donor.gender = this.gender;
      this.donor.yearOfBirth = this.yearOfBirth.getFullYear().toString();
      this.donor.phoneNumber = this.phoneNumber;

      this.userService.updateUser(this.donor)
        .subscribe(response => {
          console.log(response);
          this.alertService.success('User updated');
          this.router.navigate(['/donors']);
        });
    }
  }

}
