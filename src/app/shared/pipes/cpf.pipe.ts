import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {
//123.123.123-00
  transform(value: string): string {
    if (value && value.length === 11) {
      return `${value.substr(0, 3)}.${value.substr(3, 3)}.${value.substr(6, 3)}-${value.substr(9, 2)}`;
    }
    return value;
  }

}
