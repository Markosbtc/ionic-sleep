import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MedicalChartComponent } from './medical-chart.component';
import {
  IncPageModule, TitleBtnModule, TranslateModule,
  BloodtypeAddModule, AllergyAddModule, MedicationDetailsModule,
  ModalsModule, MedicationAddModule, AppointmentDetailsModule,
  AppointmentAddModule, ConditionDetailsModule, ConditionAddModule,
  TakedMedicationAddModule, TakedMedicationDetailsModule
} from '@inclouded/ionic4-inclouded-lib';
import { SpecificDatasModule } from './specific-datas/specific-datas.module';
import { MedicationModalComponent } from './medication-modal/medication-modal.component';
import { AppointmentModalComponent } from './appointment-modal/appointment-modal.component';
import { MatTabsModule } from '@angular/material';
import { ConditionModalComponent } from './condition-modal/condition-modal.component';
import { TakedMedicationModalComponent } from './taked-medication/taked-medication-modal/taked-medication-modal.component';

@NgModule({
  declarations: [
    MedicalChartComponent,
    MedicationModalComponent,
    AppointmentModalComponent,
    ConditionModalComponent,
    TakedMedicationModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MatTabsModule,
    TranslateModule,
    IncPageModule,
    TitleBtnModule,
    ModalsModule,
    SpecificDatasModule,
    BloodtypeAddModule,
    AllergyAddModule,
    MedicationDetailsModule,
    MedicationAddModule,
    AppointmentDetailsModule,
    AppointmentAddModule,
    ConditionDetailsModule,
    ConditionAddModule,
    TakedMedicationAddModule,
    TakedMedicationDetailsModule
  ], exports: [
    MedicalChartComponent
  ], entryComponents: [
    MedicationModalComponent,
    AppointmentModalComponent,
    ConditionModalComponent,
    TakedMedicationModalComponent]
})
export class MedicalChartModule { }
