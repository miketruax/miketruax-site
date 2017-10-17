import {Component, OnInit, AfterViewInit} from '@angular/core';
import {fadeInAnimation} from "../animations/fade-in.animation";

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html',
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class HomeComponent implements AfterViewInit {

  constructor() {
  }


  ngAfterViewInit() {
    let fjs = document.getElementsByClassName("twitter-timeline")[0];
    let js = document.createElement("script");
    js.id = "twitter-wjs";
    js.src = "http://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
}
