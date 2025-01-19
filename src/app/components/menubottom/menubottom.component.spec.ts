import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubottomComponent } from './menubottom.component';

describe('MenubottomComponent', () => {
  let component: MenubottomComponent;
  let fixture: ComponentFixture<MenubottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenubottomComponent]
    });
    fixture = TestBed.createComponent(MenubottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
