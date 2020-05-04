import { Component, OnInit, Input } from '@angular/core';
import { IPatient, ICarePlan, ICodeableConcept } from '@ahryman40k/ts-fhir-types/lib/R4';

@Component({
  selector: 'app-care-plan-add-modal',
  templateUrl: './care-plan-add-modal.component.html',
  styleUrls: ['./care-plan-add-modal.component.scss'],
})
export class CarePlanAddModalComponent implements OnInit {
  title = 'ADD_CARE_PLAN';
  categories: ICodeableConcept[] =
    [
      {
        coding: [{ code: '73985-4', display: 'Exercise Activity', system: 'http://loinc.org' }],
        text: 'activity'
      },
      {
        coding: [{ code: '29463-7', display: 'Body Weight', system: 'http://loinc.org' }],
        text: 'weight'
      },
      {
        coding: [{ code: '55284-4', display: 'Blood pressure systolic & diastolic', system: 'http://loinc.org' }],
        text: 'bloodpressure'
      },
      {
        coding: [{ code: '', display: '', system: '' }],
        text: 'other'
      }
    ];

  @Input() patient: IPatient;
  @Input() inData: ICarePlan;
  @Input() user: any;

  constructor() {
  }

  ngOnInit() {
    this.title = this.inData ? 'EDIT_CARE_PLAN' : 'ADD_CARE_PLAN';
  }

}
