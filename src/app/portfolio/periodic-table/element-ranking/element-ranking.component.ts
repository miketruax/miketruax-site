import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'element-ranking-component',
  templateUrl: './element-ranking.component.html',
  styleUrls: ['../table/table.component.scss','./element-ranking.component.scss']
})
export class ElementRankingComponent {
  @Input() elements: Object;
  @Input() style: string;
  @Input() showRanking: boolean;
  @Input() moreInfo: boolean;
  @Output() showMore = new EventEmitter();
  @Output() closeRanking = new EventEmitter();

  getSorted(e) {
    switch (this.style) {
      case ('crustAbundance'):
        return e['abundances']["crust abundance"].split('(rank')[0];
      case ('humanAbundance'):
        return e['abundances']["human abundance"].split('(rank')[0];
      case ('universeAbundance'):
        return e['abundances']["universe abundance"].split('(rank')[0];
      case ('discoveryYear'):
        if (e['year discovered']['discoveryYear'] > 0) {
          return e['year discovered']['discoveryYear'] + ' CE';
        }
        else {
          return Math.abs(e['year discovered']['discoveryYear']) + ' BCE';
        }
      default:
        return;
    }
  }
  rankHeader() {
    switch (this.style) {
      case ('crustAbundance'):
        return 'Crust Abundance';
      case ('humanAbundance'):
        return 'Human Abundance';
      case ('universeAbundance'):
        return 'Universe Abundance';
      case ('discoveryYear'):
        return 'Discovery Year';
      default:
        return;
    }
  }
}

