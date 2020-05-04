import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[GinaController]'
})
export class GinaControllerDirective {

  @HostListener('keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.numberController(event);
  }

  constructor() { }

  numberController(event: any): void {
    if (event.key !== 'Backspace') {
      if (!(parseInt(event.key, 10) >= 2 && parseInt(event.key, 10) <= 5) || event.target.value.length === 1) {
        event.preventDefault();
      }
    }
  }
}
