import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneItemComponent } from './done-item.component';

describe('DoneItemComponent', () => {
  let component: DoneItemComponent;
  let fixture: ComponentFixture<DoneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
