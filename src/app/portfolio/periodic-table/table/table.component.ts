import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {Input} from "@angular/compiler/src/core";

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  moreInfo: boolean = false;
  showRanking: boolean = false;
  style: string = "classic";
  counter: any;
  elements: Object[];
  selectedElement: Object = {};
  currYear: number;
  year: number;
  octicons: any = require('octicons');
  icons: Object;
  globeIcon: SafeHtml;
  rocketIcon: SafeHtml;
  calendarIcon: SafeHtml;
  beakerIcon: SafeHtml;
  humanIcon: SafeHtml;
  clockIcon: SafeHtml;
  listorderedIcon: SafeHtml;
  box: Object = {el: {}, top: '', left: ''};
  transitionStyle: string;


  constructor(private sanitizer: DomSanitizer) {
    this.elements = require('../assets/elem_v3.json');
    this.currYear = new Date().getFullYear();
    this.year = this.currYear;
  }


  clearCounter() {
    clearInterval(this.counter);
  }

  changeStyle(style){
    this.transitionStyle = style;
  }

  discoveryShow() {
    this.style = 'discoveryYear';
    this.year = 0;
    this.counter = setInterval(() => {
      this.year += this.year < 1200 ? 50 : 5;
      if (this.year >= this.currYear) {
        this.year = this.currYear;
        clearInterval(this.counter);
      }
    }, 50);
  }

  setStyle(s: string) {
    this.year = this.currYear;
    clearInterval(this.counter);
    this.style = s;
  }

  hideMore(e) {
    this.selectedElement = {};
    this.transitionStyle = 'infoOut';
    window.setTimeout(() => {
      this.transitionStyle = 'infoIn startMoreInfoOut'
    }, 250);
    window.setTimeout(() => {
      this.transitionStyle = 'infoIn endMoreInfoOut';
    }, 950);
    window.setTimeout(() => {
      this.transitionStyle = '';
      this.moreInfo = !this.moreInfo
    }, 1600)
  }


  showMore(element: Object, event: any) {
    if (this.moreInfo == true) {
      return;
    }
    window.scrollTo(0, 0);
    this.selectedElement = element;
    this.box['el'] = event.target.hasOwnProperty('id') ? event.target : event.target.parentElement;
    this.box['top'] = `${this.box['el'].getBoundingClientRect().top - 85}px`;
    this.box['left'] = this.box['el'].getBoundingClientRect().left + 'px';
    clearInterval(this.counter);
    this.year = this.currYear;
    this.moreInfo = !this.moreInfo;
    this.transitionStyle = 'infoIn';
    window.setTimeout(() => {
      this.transitionStyle = 'infoIn startMoreInfoIn'
    }, 50);
    window.setTimeout(() => {
      this.transitionStyle = 'infoIn endMoreInfoIn'
    }, 650);
  }

  showRankTable() {
    window.scrollTo(0,0);
    this.transitionStyle = 'rankingIn';
    this.showRanking = !this.showRanking;
    window.setTimeout(() => {
      this.transitionStyle = 'rankingIn startRankingIn'
    }, 150);

    window.setTimeout(() => {
      this.transitionStyle = 'rankingIn endRankingIn'
    }, 250);

  }

  hideRankTable(){
    window.scrollTo(0,0);
    this.transitionStyle = 'rankingOut';
    window.setTimeout(()=>{
      this.transitionStyle = 'rankingOut startRankingOut';
    }, 150);
    window.setTimeout(()=>{
      this.transitionStyle = 'rankingOut endRankingOut';
    }, 500);
    window.setTimeout(()=>{
      this.transitionStyle = '';
      this.showRanking = !this.showRanking;
    }, 900);

  }

  iconBuilder<SafeHtml>(value: string, msg: string){
    return this.sanitizer.bypassSecurityTrustHtml(this.octicons[value].toSVG({
      height: "27.5",
      width: "27.5",
      "class": "svgIcon"
    }) + `<p class='iconDescription'>${msg}</p>`)
}

  ngOnInit() {
    this.calendarIcon = this.iconBuilder('calendar', 'Discovery Date');
    this.globeIcon = this.iconBuilder('globe', 'Crust Abundance');
    this.rocketIcon = this.iconBuilder('rocket', 'Universe Abundance');
    this.beakerIcon = this.iconBuilder('beaker', 'Standard View');
    this.humanIcon = this.iconBuilder('person', 'Human Abundance');
    this.clockIcon = this.iconBuilder('clock', 'View List By Chronological Order');
    this.listorderedIcon = this.iconBuilder('list-ordered', 'View List Ranked By Mass');
  }
}
