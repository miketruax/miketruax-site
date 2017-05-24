import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'movie-search-image',
  templateUrl: 'movie-search-image.component.html',
  styleUrls: ['../../styles/app.style.scss', './movie-search.component.scss']
})
export class MovieSearchImageComponent implements OnInit {
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

