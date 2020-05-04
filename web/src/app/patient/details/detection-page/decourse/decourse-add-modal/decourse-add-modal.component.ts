import { Component, OnInit, Input } from '@angular/core';
import { IPatient } from '@ahryman40k/ts-fhir-types/lib/R4';

@Component({
  selector: 'app-decourse-add-modal',
  templateUrl: './decourse-add-modal.component.html',
  styleUrls: ['./decourse-add-modal.component.scss'],
})
export class DecourseAddModalComponent implements OnInit {
  title = 'ADD_DECOURSE';

  @Input() patient: IPatient;
  @Input() inData: any;
  @Input() user: any;

  constructor() {
  }

  ngOnInit() {
    this.title = this.inData ? 'EDIT_DECOURSE' : 'ADD_DECOURSE';
  }

}
