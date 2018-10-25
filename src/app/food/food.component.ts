import {Component,  AfterViewInit} from '@angular/core';
import {Observable} from "rxjs";
import { Recipe } from '../models/recipe.model';
import { RootStoreFacade } from '../store';

@Component({
  selector: 'food-component',
  templateUrl: './food.component.html',
  styleUrls: ['food.component.scss']
})
export class FoodComponent{
  recipes: Observable<Array<Recipe>>;
  constructor(private store: RootStoreFacade) {
    this.recipes = store.recipes$;
  }

}
