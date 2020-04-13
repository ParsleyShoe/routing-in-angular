import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yn'
})
export class YnPipe implements PipeTransform {

  transform(value:boolean):string {
    return value ? "Y" : "N";
  }

}
