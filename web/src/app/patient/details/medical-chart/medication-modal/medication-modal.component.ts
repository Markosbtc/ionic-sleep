import { Component, OnInit, Input } from '@angular/core';
import { IPatient, IMedicationStatement } from '@ahryman40k/ts-fhir-types/lib/R4';

@Component({
  selector: 'app-medication-modal',
  templateUrl: './medication-modal.component.html',
  styleUrls: ['./medication-modal.component.scss'],
})
export class MedicationModalComponent implements OnInit {
  title = 'ADD_MEDICATION';

  @Input() patient: IPatient;
  @Input() inData: IMedicationStatement;

  constructor() {
  }

  ngOnInit() {
    this.title = this.inData ? 'EDIT_MEDICATION' : 'ADD_MEDICATION';
  }
}
