import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateISO',
  standalone: true,
  pure: true,
})
export class DateISOPipe implements PipeTransform {
  transform(value: string) {
    const [year, month, day] = value.split('-');
    return `${day}/${month}/${year}`;
  }
}
