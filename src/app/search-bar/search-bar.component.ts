import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ClientDataService} from "../client-data.service";


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  //@Output() onSearch: EventEmitter<void> = new EventEmitter<void>();

  constructor(public clientData: ClientDataService) { }

  ngOnInit(): void {
  }

  onSearch(search: string) {
    this.clientData.searchString = search;
  }

}
