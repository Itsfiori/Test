import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBaxdir]'
})
export class BaxdirDirective {

  constructor( private el:ElementRef) {
    el.nativeElement.style.background='red';       el.nativeElement.style.border = "2px solid black";


   }
}
