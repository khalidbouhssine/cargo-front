import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGComponent } from './dashboard-g.component';

describe('DashboardGComponent', () => {
  let component: DashboardGComponent;
  let fixture: ComponentFixture<DashboardGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardGComponent]
    });
    fixture = TestBed.createComponent(DashboardGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
