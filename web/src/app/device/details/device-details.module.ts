import {
  ToolbarModule, IncPageModule, TranslateModule, DeviceDetailsModule,
  DeviceStatusModule, DeviceStatusTableModule
} from '@inclouded/ionic4-inclouded-lib';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DeviceDetailsPage } from './device-details.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceDetailsPage,
    data: { title: 'Eszközadatok' }
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
    DeviceDetailsModule,
    DeviceStatusModule,
    DeviceStatusTableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeviceDetailsPage]
})
export class DeviceDetailsPageModule { }
