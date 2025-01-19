import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecarComponent } from './tablecar.component';

describe('TablecarComponent', () => {
  let component: TablecarComponent;
  let fixture: ComponentFixture<TablecarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablecarComponent]
    });
    fixture = TestBed.createComponent(TablecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
