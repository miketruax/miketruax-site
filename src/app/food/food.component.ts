import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from '../reducers'
import {Recipe} from "../stores/recipe.store";
import {Observable} from "rxjs";
import {fadeInAnimation} from "../animations/fade-in.animation";

@Component({
  selector: 'food-component',
  templateUrl: './food.component.html',
  styleUrls: ['food.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class FoodComponent implements AfterViewInit {
  recipes: Observable<Array<Recipe>>;
  constructor(private store: Store<fromRoot.State>) {
    this.recipes = store.select(fromRoot.getRecipeState);
  }
  ngAfterViewInit() {
    // let fjs = document.getElementsByClassName("twitter-timeline")[0];
    // let js = document.createElement("script");
    // js.id = "twitter-wjs";
    // js.src = "http://platform.twitter.com/widgets.js";
    // fjs.parentNode.insertBefore(js, fjs);
  }
}
