import { Component, OnInit, Input } from '@angular/core';
import { IPatient, IObservationDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';

@Component({
  selector: 'app-od-add-modal',
  templateUrl: './od-add-modal.component.html',
  styleUrls: ['./od-add-modal.component.scss'],
})
export class OdAddModalComponent implements OnInit {
  title = 'ADD_ALERT';

  @Input() patient: IPatient;
  @Input() inData: IObservationDefinition;
  @Input() user: any;

  constructor() {
  }

  ngOnInit() {
    this.title = this.inData ? 'EDIT_ALERT' : 'ADD_ALERT';
  }

}
