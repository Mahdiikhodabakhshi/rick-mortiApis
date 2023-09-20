import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Principal02Component } from './principal02.component';

describe('Principal02Component', () => {
  let component: Principal02Component;
  let fixture: ComponentFixture<Principal02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Principal02Component]
    });
    fixture = TestBed.createComponent(Principal02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
