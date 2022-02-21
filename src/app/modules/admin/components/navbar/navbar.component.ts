import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/modules/shared/models/user.model';

@Component({
  selector: 'admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() currentUser: UserModel
  constructor() { }

  ngOnInit(): void {
  }

}
