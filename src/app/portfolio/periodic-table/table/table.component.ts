import {Component, HostListener, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  moreInfo: boolean = false;
  showRanking: boolean = false;
  style: string = "classic";
  counter: any;
  elements: Object[];
  selectedElement: Object = {};
  currYear: number;
  year: number;
  octicons: any = require('octicons');
  globeIcon: SafeHtml;
  rocketIcon: SafeHtml;
  calendarIcon: SafeHtml;
  beakerIcon: SafeHtml;
  humanIcon: SafeHtml;
  clockIcon: SafeHtml;
  listorderedIcon: SafeHtml;
  constructor(private sanitizer: DomSanitizer){
    this.elements = require('../assets/elem_v3.json');
    this.currYear = new Date().getFullYear();
    this.year = this.currYear;
  }



  clearCounter(){
    clearInterval(this.counter);
  }

  discoveryShow(){
    this.style='discoveryYear';
    this.year = 0;
    this.counter = setInterval( ()=>{
      this.year += this.year < 1200 ? 50 : 5;
      if(this.year >= this.currYear){
        this.year = this.currYear;
        clearInterval(this.counter);
      }
    }, 50);
  }
  setStyle(s: string){
    this.year = this.currYear;
    clearInterval(this.counter);
    this.style = s;
  }
  showMore(e:Object){
    clearInterval(this.counter);
    this.year = this.currYear;
    window.scrollTo(0,0);
    this.moreInfo = !this.moreInfo;
    this.selectedElement = e;
  }

  ranking(){
    this.showRanking = !this.showRanking;
  }

  ngOnInit(){

    this.calendarIcon =  this.sanitizer.bypassSecurityTrustHtml(this.octicons.calendar.toSVG({height: "35", width: "35", "class": "svgIcon"}) + "<p class='iconDescription'>Discovery Date</p>");
    this.globeIcon =  this.sanitizer.bypassSecurityTrustHtml(this.octicons.globe.toSVG({height: "35", width: "35", "class": "svgIcon"}) + "<p class='iconDescription'>Crust Abundance</p>");
    this.rocketIcon =  this.sanitizer.bypassSecurityTrustHtml(this.octicons.rocket.toSVG({height: "35", width: "35", "class": "svgIcon"}) + "<p class='iconDescription'>Universe Abundance</p>");
    this.beakerIcon =  this.sanitizer.bypassSecurityTrustHtml(this.octicons.beaker.toSVG({height: "35", width: "35", "class": "svgIcon"}) + "<p class='iconDescription'>Standard View</p>");
    this.humanIcon =  this.sanitizer.bypassSecurityTrustHtml(this.octicons.person.toSVG({height: "35", width: "35", "class": "svgIcon"}) + "<p class='iconDescription'>Human Abundance</p>");
    this.clockIcon =  this.sanitizer.bypassSecurityTrustHtml("<h3>"+this.octicons.clock.toSVG({height: "35", width: "35", "class": "svgIcon"}) + " View By Chronological Order");
    this.listorderedIcon =  this.sanitizer.bypassSecurityTrustHtml("<h3>"+this.octicons["list-ordered"].toSVG({height: "35", width: "35", "class": "svgIcon"}) + " View Ranked List");

  }
}
