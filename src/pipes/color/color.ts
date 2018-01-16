import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {

  transform(value: string, ...args) {
    let result: string;
    switch (value) {
      case '不立项'://不立项
        result = 'redProject'
        break;
      case '立项'://立项
        result = 'blueProject'
        break;
      case '预立项'://预立项
        result = 'preProject'
        break;
      case 'NONE':
        result = 'orange';
    }
    return result;
  }
}
