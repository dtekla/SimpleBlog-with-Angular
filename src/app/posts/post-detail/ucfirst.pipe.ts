import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucfirst'
})
export class UcfirstPipe implements PipeTransform {

  transform(value: string): string {

    let splitStr = value.toLowerCase().split('');
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[0] = splitStr[0].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join('');
  }
}
