import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberPipe'
})
export class PhoneNumberPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
