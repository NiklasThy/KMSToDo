import { Injectable } from '@angular/core';
import {ToDo} from "./ToDo";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditModalComponent} from "./edit-modal/edit-modal.component";

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  public todoList: ToDo[] = [
    new ToDo("Einkaufen", "Für nächsten Mittwoch einkaufen gehen"),
    new ToDo("Rasen mähen", "Bis Freitag Rasen mähen!")
  ];

  constructor(private modalService: NgbModal) { }

  public addToDo(title: string, description: string){
    let newTodo = new ToDo(title, description);
    this.todoList.push(newTodo);
  }

  async edit(index: number){
    for(let todo of this.todoList) {
      if(index === todo.index) {
        const modalReference = this.modalService.open(EditModalComponent);
        modalReference.componentInstance.todoTitle = todo.title;
        modalReference.componentInstance.todoDesc = todo.description;

        try{
          const result: string[] = await modalReference.result;
          todo.title = result[0];
          todo.description = result[1];
          return
        }catch(error){
          console.log(error);
          return
        }
      }
    }
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
}
