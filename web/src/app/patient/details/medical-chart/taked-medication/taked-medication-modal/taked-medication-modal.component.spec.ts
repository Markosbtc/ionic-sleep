import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakedMedicationModalComponent } from './taked-medication-modal.component';

describe('TakedMedicationModalComponent', () => {
  let component: TakedMedicationModalComponent;
  let fixture: ComponentFixture<TakedMedicationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TakedMedicationModalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakedMedicationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
