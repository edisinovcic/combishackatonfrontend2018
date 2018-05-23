import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertService } from '../shared/alert.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-donor-edit',
  templateUrl: './donor-edit.component.html',
  styleUrls: ['./donor-edit.component.css']
})
export class DonorEditComponent implements OnInit {
  id: string;
  editMode: boolean;

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

          if (this.editMode) {
            // this.userService.getUser(this.id)
            //   .subscribe(
            //     user => {
            //       this.user = user;
            //       this.populateModel();
            //     },
            //     error => {
            //       if (error.status !== 200 || error.status !== 201) {
            //         this.alertService.danger('Cannot fetch user data');
            //       }
            //     }
            //   );
          }
        }
      );

  }

}
