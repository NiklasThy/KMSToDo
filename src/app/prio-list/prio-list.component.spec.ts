import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioListComponent } from './prio-list.component';

describe('PrioListComponent', () => {
  let component: PrioListComponent;
  let fixture: ComponentFixture<PrioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
