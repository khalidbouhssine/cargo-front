import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhomeComponent } from './menuhome.component';

describe('MenuhomeComponent', () => {
  let component: MenuhomeComponent;
  let fixture: ComponentFixture<MenuhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuhomeComponent]
    });
    fixture = TestBed.createComponent(MenuhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
