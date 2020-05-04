import { Component, OnInit, Input } from '@angular/core';
import { IPatient, ICondition } from '@ahryman40k/ts-fhir-types/lib/R4';

@Component({
  selector: 'app-condition-modal',
  templateUrl: './condition-modal.component.html',
  styleUrls: ['./condition-modal.component.scss'],
})
export class ConditionModalComponent implements OnInit {
  title = 'ADD_ANAMNESIS';
  categories = [
    'surgery',
    'sickness',
    'other'
  ];
  urlBno = '/assets/bno_json_list.json';

  @Input() patient: IPatient;
  @Input() inData: ICondition;
  @Input() user: any;

  constructor() {
  }

  ngOnInit() {
    this.title = this.inData ? 'EDIT_ANAMNESIS' : 'ADD_ANAMNESIS';
  }
}
