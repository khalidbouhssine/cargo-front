import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespayComponent } from './respay.component';

describe('RespayComponent', () => {
  let component: RespayComponent;
  let fixture: ComponentFixture<RespayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RespayComponent]
    });
    fixture = TestBed.createComponent(RespayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
