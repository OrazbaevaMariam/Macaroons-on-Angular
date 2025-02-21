import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class truncatePipe implements PipeTransform {

  transform(value: string): string {
   return  value.length >= 95 ? value.slice(0, 95) + '...' : value;
    return value;
    }

}
