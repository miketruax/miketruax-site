import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../animations/fade-in.animation";

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
