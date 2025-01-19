import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoclaimComponent } from './infoclaim.component';

describe('InfoclaimComponent', () => {
  let component: InfoclaimComponent;
  let fixture: ComponentFixture<InfoclaimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoclaimComponent]
    });
    fixture = TestBed.createComponent(InfoclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
