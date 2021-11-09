import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from "../ToDo";
import {ClientDataService} from "../client-data.service";
import {TodoCategoryListComponent} from "../todo-category-list/todo-category-list.component";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: ToDo = new ToDo('', '','');
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter<void>()
  @Output() doneEvent: EventEmitter<void> = new EventEmitter<void>()
  @Output() prioritizeEvent: EventEmitter<void> = new EventEmitter<void>()
  @Output() editEvent: EventEmitter<void> = new EventEmitter<void>()

  constructor(public clientService: ClientDataService) { }

  ngOnInit(): void {
  }


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
