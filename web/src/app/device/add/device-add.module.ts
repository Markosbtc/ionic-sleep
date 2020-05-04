import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeviceAddPage } from './device-add.page';
import { ToolbarModule, IncPageModule, DeviceAddModule, TranslateModule } from '@inclouded/ionic4-inclouded-lib';

const routes: Routes = [
  {
    path: '',
    component: DeviceAddPage,
    data: { title: 'Eszköz felvétel' }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarModule,
    IncPageModule,
    DeviceAddModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeviceAddPage]
})
export class DeviceAddPageModule { }
