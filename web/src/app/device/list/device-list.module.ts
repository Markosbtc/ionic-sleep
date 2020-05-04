import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeviceListPage } from './device-list.page';
import { ToolbarModule, IncPageModule, TranslateModule, DeviceTableModule } from '@inclouded/ionic4-inclouded-lib';


const routes: Routes = [
  {
    path: '',
    component: DeviceListPage,
    data: { title: 'Eszközök' }
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
    DeviceTableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeviceListPage],
  exports: [DeviceListPage]
})
export class DeviceListPageModule { }
