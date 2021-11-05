import { Injectable } from '@angular/core';
import {ToDo} from "./ToDo";

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  public todoList: ToDo[] = [
    new ToDo("Einkaufen", "Für nächsten Mittwoch einkaufen gehen"),
    new ToDo("Rasen mähen", "Bis Freitag Rasen mähen!")
  ];

  constructor() { }

  public addToDo(title: string, description: string){
    let newTodo = new ToDo(title, description);
    this.todoList.push(newTodo);
  }
}
