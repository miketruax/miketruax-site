import {Component, HostListener} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  moreInfo: boolean = false;
  showRanking: boolean = false;
  style: string = "classic";
  counter: any;
  elements: Object[];
  selectedElement: Object = {};
  currYear: number;
  year: number;
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
}
