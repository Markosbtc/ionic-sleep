import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';


import { ObservationListPage } from './observation-list.page';
import { ToolbarModule, TranslateModule, IncPageModule } from '@inclouded/ionic4-inclouded-lib';
import { SleepChartComponent } from './components/sleep-chart/sleep-chart.component';
import { PipesModule } from './../shared/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: ObservationListPage,
    data: { title: 'Áttekintés' }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarModule,
    TranslateModule,
    IncPageModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ObservationListPage,
    SleepChartComponent
  ]
})
export class ObservationListPageModule { }
