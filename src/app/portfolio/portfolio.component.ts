import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../animations/fade-in.animation";

@Component({
  selector: 'portfolio-component',
  templateUrl: 'portfolio.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class PortfolioComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
