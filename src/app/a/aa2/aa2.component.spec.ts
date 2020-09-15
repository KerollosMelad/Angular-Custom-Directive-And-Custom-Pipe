import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aa2Component } from './aa2.component';

describe('Aa2Component', () => {
  let component: Aa2Component;
  let fixture: ComponentFixture<Aa2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aa2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
