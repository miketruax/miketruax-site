import {Component,  AfterViewInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from '../reducers'
import {Observable} from "rxjs";
import {fadeInAnimation} from "../animations/fade-in.animation";
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'food-component',
  templateUrl: './food.component.html',
  styleUrls: ['food.component.scss']
})
export class FoodComponent{
  recipes: Observable<Array<Recipe>>;
  constructor(private store: Store<fromRoot.State>) {
    this.recipes = store.select(fromRoot.getRecipeState);
  }

}
