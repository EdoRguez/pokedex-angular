import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUpper'
})
export class FirstLetterUpperPipe implements PipeTransform {

  transform(value: string): string {

    if (!value) {
      return '';
    }

    return value[0].toUpperCase() + value.substring(1).toLowerCase();
  }

}
