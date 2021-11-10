import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from "../ToDo";
import {ClientDataService} from "../client-data.service";

@Component({
  selector: 'app-prio-item',
  templateUrl: './prio-item.component.html',
  styleUrls: ['./prio-item.component.css']
})
export class PrioItemComponent{

  @Input() todo: ToDo = new ToDo('', '','');
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter<void>()
  @Output() doneEvent: EventEmitter<void> = new EventEmitter<void>()
  @Output() unprioritizeEvent: EventEmitter<void> = new EventEmitter<void>()
  @Output() editEvent: EventEmitter<void> = new EventEmitter<void>()

  constructor(public clientService: ClientDataService) { }


  fillDropDownCategory(): Array<string> {
    let categoryList: Array<string> = [];
    this.clientService.todoList.forEach((todo) => {
      if(todo.category && !categoryList.includes(todo.category)&&todo.title) {
        categoryList.push(todo.category);
      }
    })
    return categoryList;
  }

  setCategory(category: string, toDo: ToDo) {
    toDo.category = category;
  }

}
