import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  public todoTitle: string;
  public todoDesc: string;

  constructor(public activeModal: NgbActiveModal) {
    this.todoTitle = '';
    this.todoDesc = '';
  }

  save(): void{
    if(this.todoTitle.trim().length > 0 && this.todoDesc.trim().length > 0){
      this.activeModal.close([this.todoTitle, this.todoDesc]);
    }
  }

  ngOnInit(): void {
  }

}
