import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorter'
})
export class ShorterPipe implements PipeTransform {
  
  transform(value: any, cut: number): any {
    if (value.length > cut) {
    return value.substr(0, cut) + '...';
  }
  return value;
  }
}
