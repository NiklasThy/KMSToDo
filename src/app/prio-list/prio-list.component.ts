import { Component, OnInit } from '@angular/core';
import {ClientDataService} from "../client-data.service";

@Component({
  selector: 'app-prio-list',
  templateUrl: './prio-list.component.html',
  styleUrls: ['./prio-list.component.css']
})
export class PrioListComponent implements OnInit {

  title: string = "Prioritised";

  constructor(public clientData: ClientDataService) { }

  ngOnInit(): void {
  }

}
