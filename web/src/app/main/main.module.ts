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
    ],
    // canActivateChild: [AuthGuard]
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
export class MainPageModule {}
