import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(desc: any, args?: any): any {
    return desc.substr(0, 100)+'...';
  }

}
