import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePassed'
})
export class DatePassedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
