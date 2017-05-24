import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'movie-more-info',
  templateUrl: 'movie-more-info.component.html',
  styleUrls: ['../movie-search.component.scss']
})
export class MovieMoreInfoComponent implements OnInit {
  @Input() movie: Object;
  constructor() {
  }
  ngOnInit() {
  }
  @Output() close = new EventEmitter();

}

