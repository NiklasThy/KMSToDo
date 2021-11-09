import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from "../ToDo";
import {ClientDataService} from "../client-data.service";

@Component({
  selector: 'app-done-item',
  templateUrl: './done-item.component.html',
  styleUrls: ['./done-item.component.css']
})
export class DoneItemComponent implements OnInit {

  @Input() todo: ToDo = new ToDo('', '','');
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() undoneEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() prioritizeEvent: EventEmitter<void> = new EventEmitter<void>()

  constructor(public clientData: ClientDataService) { }

  ngOnInit(): void {
  }

}
