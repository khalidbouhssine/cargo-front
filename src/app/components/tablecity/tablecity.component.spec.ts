import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecityComponent } from './tablecity.component';

describe('TablecityComponent', () => {
  let component: TablecityComponent;
  let fixture: ComponentFixture<TablecityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablecityComponent]
    });
    fixture = TestBed.createComponent(TablecityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
