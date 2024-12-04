import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnnormalComponent } from './btnnormal.component';

describe('BtnnormalComponent', () => {
  let component: BtnnormalComponent;
  let fixture: ComponentFixture<BtnnormalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnnormalComponent]
    });
    fixture = TestBed.createComponent(BtnnormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
