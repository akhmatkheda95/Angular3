import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Row9Component } from './row9.component';

describe('Row9Component', () => {
  let component: Row9Component;
  let fixture: ComponentFixture<Row9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Row9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Row9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
