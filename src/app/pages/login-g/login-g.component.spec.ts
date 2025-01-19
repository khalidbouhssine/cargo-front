import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGComponent } from './login-g.component';

describe('LoginGComponent', () => {
  let component: LoginGComponent;
  let fixture: ComponentFixture<LoginGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginGComponent]
    });
    fixture = TestBed.createComponent(LoginGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
