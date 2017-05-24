import {Component, OnInit, OnChanges, Input, EventEmitter, Output, SimpleChanges} from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";

@Component({
  selector: 'pagination-component',
  templateUrl: 'pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() active: number;
  @Input() total: number;
  @Input() perPage: number;
  @Output() action = new EventEmitter;

  totalPages: number[] = [];
  buttons: number[] = [];
  jumpIdx: number = 1;
  constructor() {};
  ngOnChanges(changes: SimpleChanges){
    //this is the function that creates the pagination buttons on the bottom
    // 10 per page then rounds up so 84->9pages 24->3 pages etx
    if(this.total) {
      let numButtons = Math.ceil(this.total / this.perPage);
      this.totalPages = Array.from(Array(numButtons), (x, i) => i + 1);

      //Adds buttons for previous 5(up to page 1) and next 5 (up to last button)
      this.buttons = [];
      for (let i = (this.active - 5); i <= (this.active + 5); i++) {
        if (i > 0 && i <= numButtons) {
          this.buttons.push(i);
        }
      }
    }
  }



  ngOnInit() {
  }

}

