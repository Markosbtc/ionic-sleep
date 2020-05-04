import { IncPageModule, ToolbarModule, TranslateModule, PatientListModule, PatientOrderModule, PatientSearchModule } from '@inclouded/ionic4-inclouded-lib';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PatientListPage } from './patient-list.page';

const routes: Routes = [
  {
    path: '',
    component: PatientListPage,
    data: { title: 'Pácienslista' }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarModule,
    IncPageModule,
    TranslateModule,
    PatientListModule,
    PatientOrderModule,
    PatientSearchModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PatientListPage]
})
export class PatientListPageModule { }
