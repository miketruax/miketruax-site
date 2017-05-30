import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'elementType' })
export class ElementType implements PipeTransform {
  transform(type: string) {
    return type.replace(/-/g, ' ');



  }
}
