import { Component, OnInit, Input } from '@angular/core';
import { IPatient, IAppointment } from '@ahryman40k/ts-fhir-types/lib/R4';

@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.scss'],
})
export class AppointmentModalComponent implements OnInit {
  title = 'ADD_VISIT';
  examinations = [
    'EKG',
    'CHARGING_EKG',
    'HEART_ULTRASOUND_SCAN',
    'WALKING_TEST',
    'CHEST_XRAY',
    'Chest_CT',
    'Angio',
    'PULMONARY_FUNCTION_TEST',
    'HEART_CT',
    'HEART_MR',
    'HAEMODINAMICS',
    'GENETIC_TESTING',
    'Labor',
    'PROBNP'
  ];

  @Input() patient: IPatient;
  @Input() inData: IAppointment;
  @Input() user: any;

  constructor() {
  }

  ngOnInit() {
    this.title = this.inData ? 'EDIT_VISIT' : 'ADD_VISIT';
  }
}
