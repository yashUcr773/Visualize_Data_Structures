import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeapsComponent } from './heaps.component';

describe('HeapsComponent', () => {
  let component: HeapsComponent;
  let fixture: ComponentFixture<HeapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeapsComponent]
    });
    fixture = TestBed.createComponent(HeapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
