import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PatientAddPage } from './patient-add.page';
import { ToolbarModule, IncPageModule, PatientAddModule, TranslateModule } from '@inclouded/ionic4-inclouded-lib';

const routes: Routes = [
  {
    path: '',
    component: PatientAddPage,
    data: { title: 'Betegfelvétel' }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarModule,
    IncPageModule,
    PatientAddModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PatientAddPage]
})
export class PatientAddPageModule { }
