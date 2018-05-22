import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../services/movie.service'
import * as fromRoot from "../../../reducers";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as ActorActions from "../../../actions/actor.actions";


@Component({
  selector: 'who-was-it',
  providers: [MovieService],
  templateUrl: './who-was-it.component.html',
  styleUrls: ['./who-was-it.component.scss']
})
export class WhoWasItComponent implements OnInit {
  //Initializes elements movie as two blank elements, tooFew (movies searched for) as false, results as observable
  private movies: Array<Object> = [{movie: {'title' :'', 'year': ''}}, {movie: {'title' :'', 'year': ''}}];
  private results: Observable<any>;
  private tooFew: boolean = false;
  constructor(private movieService: MovieService, private store: Store<fromRoot.State>) {
    this.results = store.select('actors');
  }
  //Pushes blank movie to search array to allow for more than 3 searches
  addItem(){
  this.movies.push({movie: ''});
  }

  //removes current item from array unless there are only 2 items left
  //this is protection from a manual call as the minus button should automatically be removed and .length of 2 or less
  removeMovie(index) {
    this.movies.splice(index, 1);
    if(this.movies.length <=0){
      this.movies.push('');
    }
  }

  //Sets error message to false, clears blanks from search array then calls movieService for each movie in the array
  search(){
    this.tooFew = false;
    this.blankClearer();
    //If not enough movies after clearing blanks, doesn't call API and instead issues error via HTML
    if(!this.tooFew) {
      this.store.dispatch(new ActorActions.ClearActors(this.movies.length));
      this.movies.forEach((v, i, array) => {
        this.movieService.compareMovies(v['movie']['title'], v['movie']['year']);
      })
    }
  }
  //Clears all movies, re-initializes movies array
  //sets state movieNum to -1 to remove results and reset to prep for new call
  clear(){
    this.tooFew = false;
    this.movies = [{movie: ''}, {movie: ''}];
    this.store.dispatch(new ActorActions.ClearActors(-1))
  }

  //Clears blanks from movie array
  blankClearer(){

    //Iterates through movies array, if value is undefined (blank) removes it from movies array
    this.movies.forEach((v, i, array)=>{
      if(!v['movie']){
        this.movies.splice(i);
      }
    });
    //If movies array has less than 2 elements (minimum for comparison), sets tooFew error boolean to true
    //Then pushes one or two blank movies to the array depending on length, resetting it to requisite two
    if (this.movies.length <2) {
      this.tooFew = true;
      this.movies.length === 1 ? this.movies.push({movie: {'title' :'', 'year': ''}}) : this.movies.push({movie: {'title' :'', 'year': ''}}, {movie: {'title' :'', 'year': ''}});
    }
  }

  ngOnInit() {
  }

}
