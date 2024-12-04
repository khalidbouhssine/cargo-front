import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenunormalComponent } from './menunormal.component';

describe('MenunormalComponent', () => {
  let component: MenunormalComponent;
  let fixture: ComponentFixture<MenunormalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenunormalComponent]
    });
    fixture = TestBed.createComponent(MenunormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
