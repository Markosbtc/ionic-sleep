import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@inclouded/ionic4-inclouded-lib';
import { SpecificDatasComponent } from './specific-datas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GinaControllerDirective } from './directives/gina-controller.directive';

@NgModule({
  declarations: [SpecificDatasComponent, GinaControllerDirective],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SpecificDatasComponent]
})
export class SpecificDatasModule { }
