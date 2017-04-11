import {
  Action,
} from '@ngrx/store';
import {Injectable} from "@angular/core";
import {Recipe} from "../stores/recipe.store";


@Injectable()
export class Actions {
  static ADD_RECIPES = '[Recipes] Add Recipes';
  addRecipes(recipes): Action {
    return {
      type: Actions.ADD_RECIPES,
      payload: recipes
    };
  }

  static CREATE_RECIPE = '[Recipe] Create Recipe';
  createRecipes(recipe): Action {
    return {
      type: Actions.CREATE_RECIPE,
      payload: recipe
    }
  }

  static UPDATE_RECIPE = '[Recipe] Update Recipe';
  updateRecipes(recipe): Action {
    return {
      type: Actions.UPDATE_RECIPE,
      payload: recipe
    }
  }

  static DELETE_RECIPE = '[Recipe] Delete Recipe';
  deleteRecipes(number): Action {
    return {
      type: Actions.DELETE_RECIPE,
      payload: number
    }
  }


}
