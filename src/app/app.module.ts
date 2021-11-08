import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddFormComponent } from './add-form/add-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { DoneItemComponent } from './done-item/done-item.component';
import { PrioItemComponent } from './prio-item/prio-item.component';
import { PrioListComponent } from './prio-list/prio-list.component';
import { PrioDoneItemComponent } from './prio-done-item/prio-done-item.component';
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {EditModalComponent} from "./edit-modal/edit-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    TodoListComponent,
    TodoItemComponent,
    DoneItemComponent,
    PrioItemComponent,
    PrioListComponent,
    PrioDoneItemComponent,
    SearchBarComponent,
    EditModalComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
