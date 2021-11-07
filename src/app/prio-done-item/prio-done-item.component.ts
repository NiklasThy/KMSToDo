import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from "../ToDo";
import {ClientDataService} from "../client-data.service";

@Component({
  selector: 'app-prio-done-item',
  templateUrl: './prio-done-item.component.html',
  styleUrls: ['./prio-done-item.component.css']
})
export class PrioDoneItemComponent implements OnInit {

  @Input() todo: ToDo = new ToDo('', '');
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() undoneEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() unprioritizeEvent: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

}
