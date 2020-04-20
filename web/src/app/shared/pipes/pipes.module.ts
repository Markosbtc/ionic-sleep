import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinuteToHourPipe } from './minute-to-hour.pipe';

@NgModule({
    declarations: [MinuteToHourPipe],
    imports: [
        CommonModule
    ],
    exports: [MinuteToHourPipe],
    providers: [MinuteToHourPipe]
})
export class PipesModule { }
