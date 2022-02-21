import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { UserModel } from 'src/app/modules/shared/models/user.model';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminIndexComponent implements OnInit {
  currentUser: UserModel;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/magement']);
  }
}
