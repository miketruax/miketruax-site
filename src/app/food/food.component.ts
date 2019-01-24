import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import { Recipe } from '../models/recipe.model';
import { RootStoreFacade } from '../store';
import { fadeInAnimation } from '../shared/animations/fadeInAnimation';

@Component({
  selector: 'food-component',
  templateUrl: './food.component.html',
  styleUrls: ['food.component.scss'],
  animations: [fadeInAnimation]
})
export class FoodComponent implements OnInit{
  recipes: Array<Recipe>;
  category: Observable<number>;
  activeRecipe: Observable<Recipe>
  categories = ["breads", "desserts", "entrees", "sides"];
  constructor(private store: RootStoreFacade) {
    this.activeRecipe = this.store.activeRecipe$;
    this.category = this.store.category$;
  }

  setCat(newCat: number){
    this.store.selectCategory(newCat);
    this.store.selectActiveRecipe(this.recipes.find(recipe => recipe.category_ID == newCat))
  }

  setRecipe(recipe: Recipe){
    this.store.selectActiveRecipe(recipe);
  }

  ngOnInit(){
    this.store.recipes$.subscribe(recipes=>{
      this.recipes = recipes;
    })
  }
}
