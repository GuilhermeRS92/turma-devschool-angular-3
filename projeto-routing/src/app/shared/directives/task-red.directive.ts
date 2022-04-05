import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTaskRed]'
})
export class TaskRedDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = 'red';
  }

}
