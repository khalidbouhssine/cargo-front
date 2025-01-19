import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableclaimComponent } from './tableclaim.component';

describe('TableclaimComponent', () => {
  let component: TableclaimComponent;
  let fixture: ComponentFixture<TableclaimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableclaimComponent]
    });
    fixture = TestBed.createComponent(TableclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
