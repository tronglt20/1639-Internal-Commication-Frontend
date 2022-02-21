import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from 'src/app/modules/shared/models/user.model';
import { SharedService } from 'src/app/modules/shared/services/shared.services';

@Component({
  selector: 'user-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class UserNavigationComponent implements OnInit {
  @Output("navigateToUser") chosenUser = new EventEmitter<UserModel>()
  @Input() currentUser: UserModel;
  userList: UserModel[];

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.loadUserList();
  }

  loadUserList() {
    this.service
      .getAll<UserModel>(`users/getallexceptcurrent`)
      .subscribe((data) => {
        this.userList = data;
      });
  }

  navigateToUser(user: UserModel){
    this,this.chosenUser.emit(user);
  }
}
