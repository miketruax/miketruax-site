import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ranking' })
export class RankingPipe implements PipeTransform {
  transform(elem: Object[], type: string) {
    let ret = [];
    switch (type) {
      case 'humanAbundance':
        elem.forEach((val, i, elements) => {
          if (val["abundances"] && val["abundances"]["human abundance"]) {
            let rank = parseInt(val["abundances"]["human abundance"].split('(rank: ')[1]);
            if (rank) {
              ret.push(val);
            }
          }
        });
        ret.sort((a, b) => {
          return parseInt(a["abundances"]["human abundance"].split('(rank: ')[1]) - parseInt(b["abundances"]["human abundance"].split('(rank: ')[1])
        });
        return ret;

      case 'crustAbundance':
        elem.forEach((val, i, elements) => {
          if (val["abundances"] && val["abundances"]["crust abundance"] !== undefined) {
            let rank = parseInt(val["abundances"]["crust abundance"].split('(rank: ')[1]);
            if (rank) {
              ret.push(val);
            }
          }
        });
        ret.sort((a, b) => {
          return parseInt(a["abundances"]["crust abundance"].split('(rank: ')[1]) - parseInt(b["abundances"]["crust abundance"].split('(rank: ')[1])
        });
        return ret;

      case 'discoveryYear':
        elem.forEach((val)=>{
          ret.push(val);
        });
        ret.sort((a, b) => {
          return a['discoveryYear'] > b['discoveryYear'] ? 1 : a['discoveryYear'] < b['discoveryYear'] ? -1 : 0;
        });
        return ret;

      case 'universeAbundance':
        elem.forEach((val, i, elements) => {
          if (val["abundances"] && val["abundances"]["universe abundance"]) {
            let rank = parseInt(val["abundances"]["universe abundance"].split('(rank: ')[1]);
            if (rank) {
              ret.push(val);
            }
          }
        });
        ret.sort((a, b) => {
          return parseInt(a["abundances"]["universe abundance"].split('(rank: ')[1]) - parseInt(b["abundances"]["universe abundance"].split('(rank: ')[1])
        });
        return ret;

      default:
        return [];
    }
  }
}
