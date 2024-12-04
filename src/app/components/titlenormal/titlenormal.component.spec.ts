import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlenormalComponent } from './titlenormal.component';

describe('TitlenormalComponent', () => {
  let component: TitlenormalComponent;
  let fixture: ComponentFixture<TitlenormalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitlenormalComponent]
    });
    fixture = TestBed.createComponent(TitlenormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
