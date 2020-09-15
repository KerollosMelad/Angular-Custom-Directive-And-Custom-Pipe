import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, lenght?: number): any {
    if (!value) {
      return null;
    } else {
      let actualLenght = lenght ? lenght : 50;
      return value.substr(0, actualLenght) + '...';
    }
  }
}
