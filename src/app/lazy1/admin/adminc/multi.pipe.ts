import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value*2;
  }

}
