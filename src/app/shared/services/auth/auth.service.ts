import { Injectable } from '@angular/core';
import { auth } from '../../models/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users : auth[] = []

  activeUser : auth | undefined

  constructor(private _router : Router) { }

  register(pseudo : string, email : string, password : string) : string{

    if (this.users.find(u => u.email == email)) {

      return 'Email deja utilisé.'

    }

    if (this.users.find(u => u.pseudo == pseudo)) {

      return 'Pseudo deja utilisé.'

    }

    let newUser : auth = {
      pseudo : pseudo,
      email : email,
      password : password
    }

    this.users.push(newUser)

    this.activeUser = newUser

    setTimeout(() => {this._router.navigate(['/exercice/auth'])} , 1000)

    return 'Enregistrement effectué.'

  }

  login(email : string, password : string) : string {

    this.activeUser = this.users.find(u => u.email == email && u.password == password)

    return this.activeUser ? 'Utilisateur Connecté' : 'Email ou mot de passe incorrect'

  }

  logout(){

    this.activeUser = undefined

  }
}
