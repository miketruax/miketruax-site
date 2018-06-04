import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'rankingInfo' })
export class RankingInfoPipe implements PipeTransform {
  transform(e: Object, style: string) {
    switch (style) {
      case ('crustAbundance'):
        return e['abundances']["crust abundance"].split('(rank')[0];
      case ('humanAbundance'):
        return e['abundances']["human abundance"].split('(rank')[0];
      case ('universeAbundance'):
        return e['abundances']["universe abundance"].split('(rank')[0];
      case ('discoveryYear'):
        if (e['basic properties']['year discovered'] > 0) {
          return e['basic properties']['year discovered'] + ' CE';
        }
        else {
          return Math.abs(e['basic properties']['year discovered']) + ' BCE';
        }
      default:
        return;
    }
  }
}
