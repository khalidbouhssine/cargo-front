import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumobilehomeComponent } from './menumobilehome.component';

describe('MenumobilehomeComponent', () => {
  let component: MenumobilehomeComponent;
  let fixture: ComponentFixture<MenumobilehomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenumobilehomeComponent]
    });
    fixture = TestBed.createComponent(MenumobilehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
