import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { UserModel } from 'src/app/modules/shared/models/user.model';

@Component({
  selector: 'user-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class UserIndexComponent implements OnInit {
  currentUser: UserModel;
  chosenUser: UserModel

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  ngOnInit(): void {}

  navigateToUser(user){
    this.chosenUser = user;
  }
}
