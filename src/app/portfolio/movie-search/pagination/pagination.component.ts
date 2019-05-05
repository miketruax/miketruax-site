import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'pagination-component',
  templateUrl: 'pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() active: number;
  @Input() total: string;
  @Input() perPage: number;
  @Output() action = new EventEmitter;
  buttons: Array<number> = []
  totalPages: number;
  constructor() {};

  buildButtons(){
    let start = this.active - 2;
    let end = this.active + 2;
    if(start < 1){
      start = 1;
      end = 5 > this.totalPages ? this.totalPages : 5;
    }
    else if(end > this.totalPages){
      end = this.totalPages;
      start = this.totalPages - 4 < 1 ? 1 : this.totalPages - 4;
    }

    for(let i = start; i <= end; i++){
        this.buttons.push(i)  
    }
  }


  ngOnInit() {
    this.totalPages = Math.ceil(parseInt(this.total)/this.perPage)
    this.buildButtons()
  }

}

