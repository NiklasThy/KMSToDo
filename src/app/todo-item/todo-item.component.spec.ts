import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';


describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setCategory(...) should set the value to the given category',() => {
    component.setCategory("Success",component.todo)
    expect(component.todo.category).toBe("Success")
  });

  it('After todo has been added, it should be included within the returned category list of fillDropDownCategory()',() => {
    let output: Array<string>;
    component.clientService.addToDo("Math homework","Study for the test","Math")
    output = component.fillDropDownCategory()
    expect(output.includes("Math")).toBeTruthy()
  });

});

