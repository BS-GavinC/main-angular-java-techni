import { Injectable } from '@angular/core';
import { user } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : user[] = [
    {email : 'pol.pol.be', name : 'polo'},
    {email : 'pil.pil.be', name : 'pilo'},
    {email : 'pul.pul.be', name : 'pulo'},
    {email : 'poul.poul.be', name : 'poulo'},
    {email : 'poil.poil.be', name : 'poilo'}
  ]

  constructor() { }
}



