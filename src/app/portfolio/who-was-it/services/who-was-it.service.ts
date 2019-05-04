import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { of, BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class WhoWasItService {
  results = {actors: [], ready: false}
  observableResults: BehaviorSubject<Object>
  numMovies: number = 0;
  constructor(private http: HttpClient) {
    this.observableResults = new BehaviorSubject<Object>(this.results)
  }
  //API call to OMDB to retrieve actor information on movies entered
  
  getResults(){
    return this.observableResults
  }
  
  getMovie(movie: Object) {
    this.http
      .get(`http://www.omdbapi.com/?t=${movie["title"]}&y=${movie["year"]}&apikey=25c98aaf`)
      .pipe(
        map(res => res["Actors"] && res["Actors"] !== "N/A" ? res["Actors"].split(", "): []),
        catchError(err => of([]))
      )
      .subscribe(payload => this.addActors(payload));
  }

  addActors(data: Array<string>){
    this.results['actors'] = [...this.results["actors"], ...data]
    --this.numMovies == 0 ? this.combineActors() : null
  }

  combineActors(){
    let combiner = {};
    this.results["actors"].forEach(val=>{
      combiner[val] ? ++combiner[val] : combiner[val] = 1
    });
    this.results["actors"] = this.results["actors"].filter(val =>{ 
      if(combiner[val] > 1){
        --combiner[val]
        return true
      }
      return false;
    });
    this.results["ready"] = true;
    this.observableResults.next(this.results);
  }

  searchMovies(movies: Array<Object>) {
    this.results = {actors: [], ready: false}
    let reducedMovies = movies.filter(val => val["title"]);
    this.numMovies = reducedMovies.length;
    reducedMovies.forEach(val => this.getMovie(val));
  }
}
