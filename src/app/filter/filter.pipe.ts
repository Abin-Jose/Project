import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public result : string;



  transform(value: any, args?: any): any {
   this.result = value.slice(0, -1);
   return this.result;
  }

}
