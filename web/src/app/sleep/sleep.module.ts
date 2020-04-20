import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ToolbarModule, TranslateModule, IncPageModule } from '@inclouded/ionic4-inclouded-lib';

import { SleepPage } from './sleep.page';

const routes: Routes = [
  {
    path: '',
    component: SleepPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ToolbarModule,
    TranslateModule,
    IncPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SleepPage]
})
export class SleepPageModule {}
