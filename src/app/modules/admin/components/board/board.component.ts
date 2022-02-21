import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from 'src/app/modules/shared/models/register.model';
import { UserModel } from 'src/app/modules/shared/models/user.model';
import { SharedService } from 'src/app/modules/shared/services/shared.services';

@Component({
  selector: 'admin-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.loadUserList();
    this.registerForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl(''),
    });
  }

  userList: UserModel[];
  popupVisible = false;

  loadUserList() {
    this.service
      .getAll<UserModel>(`users/getallexceptcurrent`)
      .subscribe((data) => {
        this.userList = data;
      });
  }

  showAddUserPopup() {
    this.popupVisible = true;
  }

  // Register session
  public validateControl = (controlName: string) => {
    return (
      this.registerForm.controls[controlName].invalid &&
      this.registerForm.controls[controlName].touched
    );
  };
  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  };

  public registerUser = (registerFormValue) => {
    const formValues = { ...registerFormValue };
    if (formValues.password !== formValues.confirm) {
      console.log('Wrong confirmation password');
      return;
    }
    const user: RegisterModel = {
      userName: formValues.userName,
      email: formValues.email,
      password: formValues.password,
    };
    this.service
      .post<RegisterModel>('authentication/register', user)
      .subscribe({
        next: (result) => {
          console.log('register success');
          this.popupVisible = false;
          this.loadUserList();
        },
        error: (error) => {
          console.log(error);
        },
      });
  };
}
