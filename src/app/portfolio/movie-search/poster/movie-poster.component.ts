import {Component, OnInit, Input} from '@angular/core';
import { PosterService } from './poster.service';
import { PortfolioStoreFacade } from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'movie-poster',
  templateUrl: 'movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {
  @Input() imdbID: string;
  imageToShow: any;
  isPosterLoading: boolean = true;
  movie : Observable<Object>
  constructor(private posterService: PosterService, private portfolioStore: PortfolioStoreFacade) {
    this.movie = this.portfolioStore.selectedMovie$;
  }
  

  posterFromBlob(image: Blob){
    let fr = new FileReader();
    fr.addEventListener("load", ()=>{
      this.imageToShow = fr.result;
      this.isPosterLoading = false
    }, false)
      fr.readAsDataURL(image);
  }

  getPosterImage(){
    this.posterService.getPoster(`http://img.omdbapi.com/?apikey=25c98aaf&i=${this.imdbID}`).subscribe(data =>{
      if(typeof data !== "boolean"){
        this.posterFromBlob(data)
      }
      return;
    })
  }

  ngOnInit() {
    this.getPosterImage();
  }

}

