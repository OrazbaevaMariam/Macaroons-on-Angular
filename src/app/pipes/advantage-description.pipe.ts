import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'advantageDescription'
})
export class AdvantageDescriptionPipe implements PipeTransform {

  transform(value: string): string {
   return  value.length >= 95 ? value.slice(0, 95) + '...' : value;
    // if (value.length <= 95) {
    //   value.slice(0, 95) + '...';
    // }
    return value;
    }

}
