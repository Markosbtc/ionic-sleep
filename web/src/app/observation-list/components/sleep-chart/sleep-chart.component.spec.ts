import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepChartComponent } from './sleep-chart.component';

describe('SleepChartComponent', () => {
  let component: SleepChartComponent;
  let fixture: ComponentFixture<SleepChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepChartComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
