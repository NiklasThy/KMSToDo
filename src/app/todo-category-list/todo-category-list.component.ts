import { Component, OnInit } from '@angular/core';
import {ClientDataService} from "../client-data.service"
import {ToDo} from "../ToDo";

@Component({
  selector: 'app-todo-category-list',
  templateUrl: './todo-category-list.component.html',
  styleUrls: ['./todo-category-list.component.css']
})
export class TodoCategoryListComponent {

  constructor(public clientService: ClientDataService) {
  }


  getCategoryList(): Array<string> {
    let categoryList: Array<string> = [];
    this.clientService.todoList.forEach((todo) => {
      if(todo.category && !categoryList.includes(todo.category)) {
        categoryList.push(todo.category);
      }
    })
    return categoryList;
  }


}
