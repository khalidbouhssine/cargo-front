import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultreservationComponent } from './resultreservation.component';

describe('ResultreservationComponent', () => {
  let component: ResultreservationComponent;
  let fixture: ComponentFixture<ResultreservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultreservationComponent]
    });
    fixture = TestBed.createComponent(ResultreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
