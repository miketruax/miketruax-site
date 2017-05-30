import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'atomicMass' })
export class AtomicMass implements PipeTransform {
  transform(mass: string) {
    let amass = mass.split(' ')[0];
    if(parseInt(amass) === parseFloat(amass)){
      return Number(amass);
    }
    return Number(Math.round(parseFloat(amass) *100)/100);



  }
}
