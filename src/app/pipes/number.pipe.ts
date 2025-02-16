import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(value: string): string {
    if (!value || value.length !== 12 || !value.startsWith('375')) {
      return value; // Возвращаем исходное значение, если формат неверный
    }

    // Разбиваем номер на группы с помощью регулярного выражения
    return value.replace(/^375(\d{2})(\d{3})(\d{2})(\d{2})$/, '+375 ($1) $2-$3-$4');
    // return value.replace(/^375(\d{2})(\d{3})(\d{2})(\d{2})$/.replace('+375 ($1) $2-$3-$4'));

  }

}


