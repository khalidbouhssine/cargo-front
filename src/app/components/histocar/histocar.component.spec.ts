import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistocarComponent } from './histocar.component';

describe('HistocarComponent', () => {
  let component: HistocarComponent;
  let fixture: ComponentFixture<HistocarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistocarComponent]
    });
    fixture = TestBed.createComponent(HistocarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
