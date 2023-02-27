import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from 'src/app/shared/models/user';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.scss']
})
export class ReadUserComponent implements OnInit {

  viewedUser : user | undefined = undefined

  email : string = ''

  constructor(private _activatedRoute : ActivatedRoute, private _userService : UserService){
      this._activatedRoute.paramMap.subscribe(param => {
        this.ngOnInit()
      })
  }

  reloadData(){
    this.email = this._activatedRoute.snapshot.params['param']
    this.viewedUser = this._userService.users.find(u => u.email == this.email)
  }

  ngOnInit(): void {
    this.reloadData()
  }





}
