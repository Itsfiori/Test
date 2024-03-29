import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeline'
})
export class PipelinePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    var newval= value.charAt(2);
    return newval;
  }

}
