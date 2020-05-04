import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';
import { NavigationModule, AuthGuard } from '@inclouded/ionic4-inclouded-lib';

const routes: Routes = [
  { path: 'main', redirectTo: 'main/observation-list', pathMatch: 'full' },
  {
    path: 'main',
    component: MainPage,
    children: [
      { path: 'observation-list', loadChildren: './../observation-list/observation-list.module#ObservationListPageModule' },
      { path: 'sleep', loadChildren: './../sleep/sleep.module#SleepPageModule' },
      { path: 'device-list', loadChildren: './../device/list/device-list.module#DeviceListPageModule' },
      { path: 'patient-list', loadChildren: './../patient/list/patient-list.module#PatientListPageModule' },
    ],
    canActivateChild: [AuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NavigationModule
  ],
  declarations: [MainPage]
})
export class MainPageModule { }
