import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadUserComponent } from './read-user/read-user.component';
import { UserMainComponent } from './user-main/user-main.component';

const routes: Routes = [
  {path : '', component : UserMainComponent, children : [
    {path : 'read/:param', component : ReadUserComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
