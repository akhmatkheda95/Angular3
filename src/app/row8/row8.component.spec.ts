import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Row8Component } from './row8.component';

describe('Row8Component', () => {
  let component: Row8Component;
  let fixture: ComponentFixture<Row8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Row8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Row8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
