import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIndexComponent } from './components/index/index.component';
import { RouterModule } from '@angular/router';
import { UserNavigationComponent } from './components/navigation/navigation.component';
import { UserMainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    UserIndexComponent,
    UserNavigationComponent,
    UserMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: UserIndexComponent},
      // {path: 'register', component: RegisterComponent},
      
    ]),
  ]
})
export class UserModule { }
