import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public result : string[] = [];

  transform(genres: any, genres_name?: any): any {
    this.result = [];
    genres.forEach(id => {
      for (var key in genres_name) {
        var obj = genres_name[key];
        if(id == obj.id){
          this.result.push(obj.name);
        }
      }
    });
    return this.result;
  }

}
