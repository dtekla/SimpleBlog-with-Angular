import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, maxChar: number): string {
    if (value.length <= maxChar) {
      return value
    } else {
      return `${value.slice(0, maxChar - 1)}...`;
    }
  }
}
