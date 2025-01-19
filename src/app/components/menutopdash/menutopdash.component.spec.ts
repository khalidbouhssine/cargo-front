import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutopdashComponent } from './menutopdash.component';

describe('MenutopdashComponent', () => {
  let component: MenutopdashComponent;
  let fixture: ComponentFixture<MenutopdashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenutopdashComponent]
    });
    fixture = TestBed.createComponent(MenutopdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
