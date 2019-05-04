import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { WhoWasItService } from "./services/who-was-it.service";

@Component({
  selector: "who-was-it",
  templateUrl: "./who-was-it.component.html",
  styleUrls: ["./who-was-it.component.scss"]
})
export class WhoWasItComponent implements OnInit {
  //Initializes elements movie as two blank elements, tooFew (movies searched for) as false, results as observable
  searchArray: Array<Object> = [{ title: "", year: "" }, { title: "", year: "" }];
  results: any;

  constructor(private whoService: WhoWasItService) {
    
  }

  addMovie() {
    this.searchArray.push({ movie: "", year: "" });
  }

  removeMovie(index) {
    this.searchArray.splice(index, 1);
  }

  search() {
    if (!this.tooFew) {
      this.whoService.searchMovies(this.searchArray);
    }
  }

  clear() {
    this.searchArray = [{ movie: "" }, { movie: "" }];
  }

  get tooFew() {
    let numValid = 0;
    this.searchArray.forEach(m => (m["title"] ? numValid++ : null));
    return numValid < 2;
  }

  ngOnInit() {
    this.results = this.whoService.getResults();
  }
}
