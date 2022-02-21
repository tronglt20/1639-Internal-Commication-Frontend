import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminIndexComponent } from './components/index/index.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoardComponent } from './components/board/board.component';
import { DxPopupModule, DxButtonModule, DxTemplateModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminIndexComponent,
    NavbarComponent,
    BoardComponent
  ],
  imports: [
    DxPopupModule, DxButtonModule, DxTemplateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: AdminIndexComponent},
      // {path: 'register', component: RegisterComponent},
      
    ]),
  ]
})
export class AdminModule { }
