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

  public searchString: string = "";

  constructor() { }

  public addToDo(title: string, description: string){
    let newTodo = new ToDo(title, description);
    this.todoList.push(newTodo);
  }

  public delete(index: number){
    this.todoList.splice(index, 1);
  }

  public done(index: number){
    this.todoList[index].done = true;
  }

  public undone(index: number){
    this.todoList[index].done = false;
  }

  public prioritize(index: number) {
    this.todoList[index].prioritised = true;
  }

  public unprioritize(index: number) {
    this.todoList[index].prioritised = false;
  }

  itemIsSearched(item: ToDo): boolean {
    return item.title.includes(this.searchString) || item.description.includes(this.searchString);
  }
}
