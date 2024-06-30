import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  transform(value: any): any {
    if (!isNaN(Date.parse(value))) {
      return format(new Date(value), 'HH:mm:ss MMM dd yyyy');
    }
    return value;
  }
}
