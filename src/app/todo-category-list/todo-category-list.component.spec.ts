import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCategoryListComponent } from './todo-category-list.component';

describe('TodoCategoryListComponent', () => {
  let component: TodoCategoryListComponent;
  let fixture: ComponentFixture<TodoCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
