import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from '../reducers'
import {RecipeService} from "../services/recipe.service";
import {Recipe} from "../stores/recipe.store";
import * as recipeActions from '../actions/recipes.actions'
import {Observable} from "rxjs";

@Component({
  selector: 'food-component',
  templateUrl: './food.component.html',
  styleUrls: ['../../assets/styles/app.style.scss']
})
export class FoodComponent implements OnInit {
  recipes: Observable<Array<Recipe>>;
  active = 'breads';
  constructor(private store: Store<fromRoot.State>, private recipeService: RecipeService) {
    this.recipes = store.select(fromRoot.getRecipeState);
    this.recipeService.getRecipes();



  }
  ngOnInit() {
  }

}
