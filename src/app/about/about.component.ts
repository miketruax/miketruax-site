import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../animations/fade-in.animation";

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
