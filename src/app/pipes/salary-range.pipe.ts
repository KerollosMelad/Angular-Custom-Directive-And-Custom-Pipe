import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryRangePipe'
})
export class SalaryRangePipe implements PipeTransform {

  transform(value: number, min?: number, max?: number): any {
    if (!value) {
      return null;
    } else if (value < min)
      value = min;
    else if (value > max)
      value = max;
  }

}
