import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/modules/shared/models/user.model';

@Component({
  selector: 'user-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class UserMainComponent implements OnInit {
  @Input() currentUser: UserModel
  @Input() chosenUser: UserModel

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(message: string){
    message = message.trim();
    if (!message) return;

    console.log(message);
    
  }

}
