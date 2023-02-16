import { Component, EventEmitter, Input, Output } from '@angular/core';
import { item } from '../liste-course.component';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent {

  @Output()
  deleteEmitter : EventEmitter<number> = new EventEmitter<number>

  @Input()
  items : item[] = []

  emitIndex(index : number){
    this.deleteEmitter.emit(index)
  }

}
