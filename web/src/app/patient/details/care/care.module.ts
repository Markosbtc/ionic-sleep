import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  ModalsModule, TranslateModule, MedicationRequestAddModule,
  GeneralCarePlanModule, CarePlanAddModule, CarePlanDetailsModule,
  TitleBtnModule, GoalAddModule, ObservationDefinitionAddModule,
  MedicationRequestDetailsModule
} from '@inclouded/ionic4-inclouded-lib';
import { CareComponent } from './care.component';
import { RequestModalComponent } from './medication/request-modal/request-modal.component';
import { CarePlanAddModalComponent } from './care-plan/care-plan-add-modal/care-plan-add-modal.component';
import { GoalAddModalComponent } from './goal/goal-add-modal/goal-add-modal.component';
import { OdAddModalComponent } from './observation-definition/od-add-modal/od-add-modal.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, IonicModule, ModalsModule,
    TranslateModule, MedicationRequestAddModule, GeneralCarePlanModule,
    CarePlanAddModule, CarePlanDetailsModule, TitleBtnModule, GoalAddModule,
    ObservationDefinitionAddModule, MedicationRequestDetailsModule
  ],
  declarations: [
    CareComponent, RequestModalComponent, CarePlanAddModalComponent,
    GoalAddModalComponent, OdAddModalComponent
  ],
  entryComponents: [
    RequestModalComponent, CarePlanAddModalComponent,
    GoalAddModalComponent, OdAddModalComponent
  ],
  exports: [CareComponent]
})
export class CareModule { }
