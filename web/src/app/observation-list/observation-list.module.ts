import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';


import { ObservationListPage } from './observation-list.page';
import { ToolbarModule, TranslateModule, IncPageModule } from '@inclouded/ionic4-inclouded-lib';

const routes: Routes = [
  {
    path: '',
    component: ObservationListPage
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
    RouterModule.forChild(routes)
  ],
  declarations: [ObservationListPage]
})
export class ObservationListPageModule {}
