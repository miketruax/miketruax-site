import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'movie-poster',
  templateUrl: 'movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {
  @Input() imdbID: string;
  placeholder: boolean = false;
  constructor() {
  }
  setPlaceholder(){
    this.placeholder = true;
  }

  ngOnInit() {
  }

}

