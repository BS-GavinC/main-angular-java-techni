import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-course',
  templateUrl: './liste-course.component.html',
  styleUrls: ['./liste-course.component.scss']
})
export class ListeCourseComponent {

  items : item[] = []

  name : string = ''

  quantity : number = 0

  addItem(){

    let item = this.items.find(i => i.name == this.name)

    if(item){

      item.quantity+= this.quantity

    }
    else{
      let newItem : item = {
      name : this.name,
      quantity : this.quantity
      }

    this.items.push(newItem)
    }

    console.log(this.items);

  }

  removeItem(index : number){

    this.items[index].quantity--

    if(this.items[index].quantity == 0){
      this.items.splice(index, 1)
    }

  }



}

export interface item{
  name : string,
  quantity : number
}
