import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispprofileComponent } from './dispprofile.component';

describe('DispprofileComponent', () => {
  let component: DispprofileComponent;
  let fixture: ComponentFixture<DispprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispprofileComponent]
    });
    fixture = TestBed.createComponent(DispprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
