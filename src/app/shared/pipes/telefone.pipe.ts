import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {
/// 8 digitos: 9999-8888
// 10/ 11 digitos: (ddd) 9999-8888

  transform(value: string): string {
    if (value && value.length === 8) {
      return `${value.substr(0, 4)}-${value.substr(4, 4)}`;
    }
    else if (value && value.length === 10){
      return `${value.substr(0, 0)}(${value.substr(0, 2)})${value.substr(3, 4)}-${value.substr(6, 4)}`;
    }
    else if (value && value.length === 11){
      return `${value.substr(0, 0)}(${value.substr(0, 3)})${value.substr(4, 4)}-${value.substr(6, 4)}`;
    }
    return value;
  }

}
