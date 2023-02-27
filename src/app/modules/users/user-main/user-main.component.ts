import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss']
})
export class UserMainComponent {

  email : string = ''

  constructor(private _router : Router){}

  submit(){

    this._router.navigate(['/users/read/' + this.email])

  }

}
