import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipePipe implements PipeTransform {

  transform(value: number): string {
    let numberAsString = value.toString();

    if (numberAsString.length < 10) {
      return numberAsString;
    }

    return `(${numberAsString.substring(0,3)}) ${numberAsString.substring(3,6)}-${numberAsString.substring(6)}`;
  }
}
