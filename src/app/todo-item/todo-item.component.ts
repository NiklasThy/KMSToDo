import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from "../ToDo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: ToDo = new ToDo('', '');
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter<void>()
  @Output() doneEvent: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

}
