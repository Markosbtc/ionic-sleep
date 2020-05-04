import { Component, OnInit, Input } from '@angular/core';
import { IPatient, IMedicationRequest } from '@ahryman40k/ts-fhir-types/lib/R4';

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.scss'],
})
export class RequestModalComponent implements OnInit {
  title = 'ADD_MEDICATION_REQUEST';
  careplans = [{ reference: '', display: 'GENERAL' },
  { reference: '', display: 'BLOODPRESSURE' },
  { reference: '', display: 'WEIGHT' },
  { reference: '', display: 'ACTIVITY' }
  ];

  @Input() patient: IPatient;
  @Input() inData: IMedicationRequest;
  @Input() user: any;

  constructor() {
  }

  ngOnInit() {
    this.title = this.inData ? 'EDIT_MEDICATION_REQUEST' : 'ADD_MEDICATION_REQUEST';
  }

}
