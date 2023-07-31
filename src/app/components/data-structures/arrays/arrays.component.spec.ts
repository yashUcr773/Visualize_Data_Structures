import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysComponent } from './arrays.component';

describe('ArraysComponent', () => {
  let component: ArraysComponent;
  let fixture: ComponentFixture<ArraysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArraysComponent]
    });
    fixture = TestBed.createComponent(ArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
