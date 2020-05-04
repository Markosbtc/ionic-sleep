import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecourseComponent } from './decourse.component';

describe('DecourseComponent', () => {
  let component: DecourseComponent;
  let fixture: ComponentFixture<DecourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecourseComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
