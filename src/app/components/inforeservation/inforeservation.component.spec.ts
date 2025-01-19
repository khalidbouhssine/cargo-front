import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforeservationComponent } from './inforeservation.component';

describe('InforeservationComponent', () => {
  let component: InforeservationComponent;
  let fixture: ComponentFixture<InforeservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InforeservationComponent]
    });
    fixture = TestBed.createComponent(InforeservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
