import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appDi]'
})
export class DiDirective {

  constructor(private el:ElementRef) {
el.nativeElement.style.background='pink'
  
  }
}
