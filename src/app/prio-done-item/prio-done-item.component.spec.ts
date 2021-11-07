import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioDoneItemComponent } from './prio-done-item.component';

describe('PrioDoneItemComponent', () => {
  let component: PrioDoneItemComponent;
  let fixture: ComponentFixture<PrioDoneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrioDoneItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioDoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
