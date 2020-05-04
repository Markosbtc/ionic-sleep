import { ToolbarModule, IncPageModule, TranslateModule, PatientBaseModule } from '@inclouded/ionic4-inclouded-lib';
import { DetectionPageModule } from './detection-page/detection-page.module';
import { MedicalChartModule } from './medical-chart/medical-chart.module';
import { PatientDetailsPage } from './patient-details.page';
import { CareModule } from './care/care.module';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PatientDetailsPage,
    data: { title: 'Betegadatok' }
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarModule,
    IncPageModule,
    MatTabsModule,
    TranslateModule,
    PatientBaseModule,
    MedicalChartModule,
    DetectionPageModule,
    CareModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PatientDetailsPage]
})
export class PatientDetailsPageModule { }
