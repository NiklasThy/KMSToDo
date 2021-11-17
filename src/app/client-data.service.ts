import { Injectable } from '@angular/core';
import {ToDo} from "./ToDo";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditModalComponent} from "./edit-modal/edit-modal.component";

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  public todoList: ToDo[] = [
    new ToDo("Einkaufen", "Für nächsten Mittwoch einkaufen gehen",'Täglich'),
    new ToDo("Rasen mähen", "Bis Freitag Rasen mähen!",'')
  ];

  public searchString: string = "";

  constructor(private modalService: NgbModal) { }

  public addToDo(title: string, description: string, category:string){
    let newTodo = new ToDo(title, description, category);
    this.todoList.push(newTodo);
    console.log(this.todoList);
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

  itemIsSearched(item: ToDo): boolean {
    return item.title.includes(this.searchString) || item.description.includes(this.searchString);
  }

    uselessFunction(text: string){
    for(let i:number= 5;i< 10;i++
    ){console.log
    (text); if(text.length
      == 5){i++;} let uselessText = "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";}
  }
}
