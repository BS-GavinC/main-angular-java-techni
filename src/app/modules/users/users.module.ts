import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ReadUserComponent } from './read-user/read-user.component';
import { UserMainComponent } from './user-main/user-main.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReadUserComponent,
    UserMainComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
