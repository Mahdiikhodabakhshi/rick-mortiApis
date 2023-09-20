import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Principal03Component } from './principal03.component';

describe('Principal03Component', () => {
  let component: Principal03Component;
  let fixture: ComponentFixture<Principal03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Principal03Component]
    });
    fixture = TestBed.createComponent(Principal03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
