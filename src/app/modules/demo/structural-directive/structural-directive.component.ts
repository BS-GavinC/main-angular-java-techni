import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent {

  users : user[] = [
    {name : 'pol', age : 23},
    {name : 'pil', age : 45},
    {name : 'poil', age : 65},
    {name : 'pul', age : 85},
    {name : 'poul', age : 21}
  ]

  display : boolean = true;

  selector : number = 2

  setDisplay(){
    this.display = !this.display
  }

}

export interface user{
  name : string,
  age : number
}
