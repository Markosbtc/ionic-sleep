import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteToHour'
})
export class MinuteToHourPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const h = Math.floor(value / 60);
    const m = value % 60;
    const minutes = m < 10 ? '0' + m : m;
    if (value) {
      if ( h > 0) {
        return h + 'h ' + minutes + ' min';
      } else {
        return minutes + ' min';
      }
    } else {
      return '';
    }
  }

}
