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

  totalPages: number;;
  constructor() {};


  ngOnInit() {
    this.totalPages = Math.ceil(parseInt(this.total)/this.perPage)
  }

}

