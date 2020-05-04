import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareComponent } from './care.component';

describe('CareComponent', () => {
  let component: CareComponent;
  let fixture: ComponentFixture<CareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
