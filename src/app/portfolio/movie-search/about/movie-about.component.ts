import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'movie-about',
  templateUrl: 'movie-about.component.html',
  styleUrls: ['./movie-about.component.scss']
})
export class MovieAboutComponent implements OnInit {
  @Input() movie: Object;
  constructor() {
  }
  ngOnInit() {
  }
  @Output() close = new EventEmitter();

}

