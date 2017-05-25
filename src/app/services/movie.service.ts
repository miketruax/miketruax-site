import {Injectable, Inject} from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import * as fromRoot from '../reducers'
import {ActorActions} from "../actions/actor.actions";
import {SelectedMovieActions} from '../actions/selectedMovies.actions'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {MovieActions} from "../actions/movies.actions";


@Injectable()
export class MovieService {
  constructor(private http: Http, private store: Store<fromRoot.State>) {
  }
    //API call to OMDB to retrieve actor information on movies entered
    compareMovies(title: String, year: number, page: number = 1){
      this.getMovies({'t': title, 'y': year, 'page': page})
            .map(res => {
              //If actors exist on response AND actors populated (not N/A), adds actors array to state
              if(res['Actors'] && res['Actors'] !== "N/A"){
                return {actors: res['Actors'].split(', '), movies: {title: title, valid: true, msg: ""} }
              }
              //If response is valid but no actors, movie is added but with messaging reflecting lack of actors
              else if(res['Response'] !== "False"){
                return {actors: [], movies: {title: title, valid: false, msg: "actors not populated on OMDB for this title"}}
              }
              //Catch all in case response from OMDB was invalid (due to wrong title or issue with API)
              else {
                return {actors: [], movies: {title: title, valid: false, msg: "could not get title from OMDBApi either"}}
              }
            })
            .map(payload => ({ type: ActorActions.ADD_ACTORS, payload }))
            //Adds information to state with actor list
            .subscribe(action => {
              this.store.dispatch(action);
              this.store.dispatch({type: ActorActions.COMBINE_ACTORS});
            });
      }

      getMovies(search: Object){
        let params: URLSearchParams =  new URLSearchParams();
        for(let k in search){
          if(search[k]) {
            params.set(k, search[k].toString());
          }
        }
        params.set('apikey', '25c98aaf');
        params.set('r', 'JSON');
        //retrieves movie information based off movie string and converts to json

        return this.http.get('http://www.omdbapi.com/', {search: params})
          .map(res => res.json())

      }

  searchMovies(title, year, page) {
    return this.getMovies({'s': title, 'y': year, 'page': page})
      .map(data=>{
        //if successful and movies are found
        if (data['Response'] === "True") {
          this.store.dispatch({type: MovieActions.UPDATE_MOVIES,
            payload: {movies: data['Search'], totalMovies: data['totalResults'],
                      error: {msg: '', err: false}}});
        }
        else if (data['Error'] === "Movie not found!") { //sets error if no movie found
          let errMsg = `No movies found that match: ${title}`;
          if (year) {
            errMsg += ' (' + year + ')';
          }
          this.store.dispatch({type: MovieActions.UPDATE_MOVIES,
                payload: {movies: [], totalMovies: null,
                          error: {msg: errMsg, err: true}}});
        }
        //in case of other error with JSONP call
        else {
          let errMsg = `An unknown error has occurred. Ensure your search contains
                        at least two characters and please try again shortly.`;
          this.store.dispatch({type: MovieActions.UPDATE_MOVIES,
            payload: {movies: [], totalMovies: null,
              error: {msg: errMsg, err: true}}});
        }
      })

  }

  //title is clicked hides search results and shows more info
  movieById(id) {
    this.store.dispatch({type: SelectedMovieActions.CLEAR_SELECTED_MOVIE});
    return this.getMovies({'i': id, 'plot': 'full'})
      //if response is valid JSON movie info, show contanier and populate info
      .map(data =>{
        if (data.Response === "True") {
          //populates the data
          this.store.dispatch({type: SelectedMovieActions.SELECT_MOVIE, payload: data})
        }
        //in case an error occurs retreiving the information
      })

  };

    }


