import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'who-was-it-results',
  styleUrls: ['./who-was-it.component.scss'],
  templateUrl: './who-was-it-results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhoWasItResultsComponent{
  @Input() results: Object;
  constructor() {
  }
}
