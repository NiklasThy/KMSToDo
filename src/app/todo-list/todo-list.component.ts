import { Component, OnInit } from '@angular/core';
import {ClientDataService} from "../client-data.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  title: string = "ToDos";

  constructor(public clientData: ClientDataService) { }

  ngOnInit(): void {
  }

}
