import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecourseComponent } from './decourse.component';
import { MatTabsModule } from '@angular/material';
import {
  TranslateModule, IncPageModule, TitleBtnModule,
  ModalsModule, DecourseDetailsModule, DecourseAddModule
} from '@inclouded/ionic4-inclouded-lib';
import { IonicModule } from '@ionic/angular';
import { DecourseAddModalComponent } from './decourse-add-modal/decourse-add-modal.component';

@NgModule({
  declarations: [DecourseComponent, DecourseAddModalComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    TranslateModule,
    IncPageModule,
    TitleBtnModule,
    IonicModule,
    ModalsModule,
    DecourseDetailsModule,
    DecourseAddModule,
  ],
  exports: [DecourseComponent],
  entryComponents: [DecourseAddModalComponent]
})
export class DecourseModule { }
