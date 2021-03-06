import { TestBed } from '@angular/core/testing';

import { ClientDataService } from './client-data.service';

describe('ClientDataService', () => {
  let service: ClientDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('todo should be added to array', () => {
    service.addToDo('Test', 'Test Description', 'Testing');
    expect(service.todoList.some(todo => todo.title === 'Test' && todo.description === 'Test Description' && todo.category === 'Testing')).toBeTrue();
  })

  it("should delete a todo", () => {
    service.addToDo('Delete todo', 'Delete test','Testing');
    let beforeDeleteLength = service.todoList.length;
    service.delete(0);
    expect(service.todoList.length).toBeLessThan(beforeDeleteLength);
  });

  it("should be able to prioritize a todo", () => {
    service.addToDo('Prio Test ToDo', 'should get prioritized', 'Testing');
    service.prioritize(0);
    expect(service.todoList[0].prioritised).toBeTrue();
  });

  it("should be able to unprioritize a todo", () => {
    service.addToDo('Prio Test ToDo', 'should get unprioritized', 'Testing');
    service.prioritize(0);
    service.unprioritize(0);
    expect(service.todoList[0].prioritised).toBeFalse();
  });

  it("should set todo on done", () => {
    service.addToDo('Test Done', 'should set on done', 'Testing');
    service.done(0);
    expect(service.todoList[0].done).toBeTrue();
  });

  it("should set todo on undone", () => {
    service.addToDo('Test Undone', 'should set on undone', 'Testing');
    service.undone(0);
    expect(service.todoList[0].done).toBeFalse();
  });

  it('should return the todo is searched', () => {
    service.addToDo('Test Search', 'Should return true', 'Testing');
    let index: number = service.todoList.length - 1;
    service.searchString = "Search";
    let expected: boolean = service.itemIsSearched(service.todoList[index]);
    expect(expected).toBeTrue();
  });

});
