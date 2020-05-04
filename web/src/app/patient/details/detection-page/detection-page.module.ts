import { MatTabsModule } from '@angular/material';
import { TranslateModule, IncPageModule } from '@inclouded/ionic4-inclouded-lib';
import { CommonModule, } from '@angular/common';
import { DetectionPageComponent } from './detection-page.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { DecourseModule } from './decourse/decourse.module';
import { SleepChartComponent } from './sleep-chart/sleep-chart.component';
import { PipesModule } from './../../../shared/pipes/pipes.module';

@NgModule({
    declarations: [
        DetectionPageComponent,
        SleepChartComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        IncPageModule,
        TranslateModule,
        MatTabsModule,
        DecourseModule,
        PipesModule
    ],
    exports: [
        DetectionPageComponent
    ],
    providers: []
})
export class DetectionPageModule { }
