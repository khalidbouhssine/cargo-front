import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoclientComponent } from './histoclient.component';

describe('HistoclientComponent', () => {
  let component: HistoclientComponent;
  let fixture: ComponentFixture<HistoclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoclientComponent]
    });
    fixture = TestBed.createComponent(HistoclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
