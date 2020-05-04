import { Component, OnInit, Input } from '@angular/core';
import { IPatient, IGoal } from '@ahryman40k/ts-fhir-types/lib/R4';

@Component({
  selector: 'app-goal-add-modal',
  templateUrl: './goal-add-modal.component.html',
  styleUrls: ['./goal-add-modal.component.scss'],
})
export class GoalAddModalComponent implements OnInit {
  title = 'ADD_GOAL';

  @Input() patient: IPatient;
  @Input() inData: IGoal;
  @Input() user: any;

  constructor() {
  }

  ngOnInit() {
    this.title = this.inData ? 'EDIT_GOAL' : 'ADD_GOAL';
  }

}
