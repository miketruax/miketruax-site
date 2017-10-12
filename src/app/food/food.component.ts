import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from '../reducers'
import {RecipeService} from "../services/recipe.service";
import {Recipe} from "../stores/recipe.store";
import * as recipeActions from '../actions/recipes.actions'
import {Observable} from "rxjs";
import {fadeInAnimation} from "../animations/fade-in.animation";

@Component({
  selector: 'food-component',
  templateUrl: './food.component.html',
  styleUrls: ['../styles/app.style.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class FoodComponent implements OnInit {
  recipes: Observable<Array<Recipe>>;
  active = 'breads';
  constructor(private store: Store<fromRoot.State>) {
    this.recipes = store.select(fromRoot.getRecipeState);
  }
  ngOnInit() {
  }

}
