import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ClientDataService} from "../client-data.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  form = new FormGroup({
    todoTitle: new FormControl(),
    todoDescription: new FormControl(),
    todoCategory: new FormControl()
  });

  constructor(private clientData: ClientDataService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.clientData.addToDo(this.form.value.todoTitle, this.form.value.todoDescription,this.form.value.todoCategory);
  }

}
