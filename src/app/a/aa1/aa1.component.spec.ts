import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aa1Component } from './aa1.component';

describe('Aa1Component', () => {
  let component: Aa1Component;
  let fixture: ComponentFixture<Aa1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aa1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
