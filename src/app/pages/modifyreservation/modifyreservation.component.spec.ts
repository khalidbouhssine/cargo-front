import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyreservationComponent } from './modifyreservation.component';

describe('ModifyreservationComponent', () => {
  let component: ModifyreservationComponent;
  let fixture: ComponentFixture<ModifyreservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyreservationComponent]
    });
    fixture = TestBed.createComponent(ModifyreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
