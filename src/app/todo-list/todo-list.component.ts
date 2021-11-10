import { Component, OnInit } from '@angular/core';
import {ClientDataService} from "../client-data.service";
import {ToDo} from "../ToDo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  title: string = "ToDos";

  constructor(public clientData: ClientDataService) { }

}
