import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioItemComponent } from './prio-item.component';

describe('PrioItemComponent', () => {
  let component: PrioItemComponent;
  let fixture: ComponentFixture<PrioItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrioItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
