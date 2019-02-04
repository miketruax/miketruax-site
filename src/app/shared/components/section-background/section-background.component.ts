import {Component, Input} from '@angular/core';

@Component({
  selector: 'section-background',
  templateUrl: 'section-background.component.html',
  styleUrls: ['section-background.component.scss']
})
export class SectionBackgroundComponent {
  @Input() background: string;
  constructor() {
  }
  get backgroundUrl(){
    return `url('../assets/img/backgrounds/${this.background}.gif')`
  }
}