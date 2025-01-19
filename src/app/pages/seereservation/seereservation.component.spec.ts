import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeereservationComponent } from './seereservation.component';

describe('SeereservationComponent', () => {
  let component: SeereservationComponent;
  let fixture: ComponentFixture<SeereservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeereservationComponent]
    });
    fixture = TestBed.createComponent(SeereservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
