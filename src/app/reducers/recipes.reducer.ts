import { Action } from '@ngrx/store';
import  * as RecipeActions  from '../actions/recipes.actions';
import {Recipe} from "../stores/recipe.store";

export type State = Recipe[]

const initialState: State = [];

export function recipeReducer(state: Recipe[] = initialState, action: RecipeActions.Actions): State{

  switch (action.type) {

    case RecipeActions.ADD_RECIPES:
      return action.payload as Recipe[];

    case RecipeActions.CREATE_RECIPE:
      return [...state, action.payload];

    case RecipeActions.UPDATE_RECIPE:
      return state.map(recipe => {
        return recipe.id === action.payload["id"]
          ? Object.assign({}, recipe, action.payload) : recipe;
      });

    case RecipeActions.DELETE_RECIPE:
      return state.filter(recipe => {
        return recipe.id !== action.payload["id"];
      });

    default:
      return state;
  }
}

export const getRecipes = (state: State) => state;
