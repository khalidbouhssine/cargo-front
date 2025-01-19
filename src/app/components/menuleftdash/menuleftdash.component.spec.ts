import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuleftdashComponent } from './menuleftdash.component';

describe('MenuleftdashComponent', () => {
  let component: MenuleftdashComponent;
  let fixture: ComponentFixture<MenuleftdashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuleftdashComponent]
    });
    fixture = TestBed.createComponent(MenuleftdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
