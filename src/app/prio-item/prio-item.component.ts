import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from "../ToDo";

@Component({
  selector: 'app-prio-item',
  templateUrl: './prio-item.component.html',
  styleUrls: ['./prio-item.component.css']
})
export class PrioItemComponent implements OnInit {

  @Input() todo: ToDo = new ToDo('', '','');
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter<void>()
  @Output() doneEvent: EventEmitter<void> = new EventEmitter<void>()
  @Output() unprioritizeEvent: EventEmitter<void> = new EventEmitter<void>()
  @Output() editEvent: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

}
