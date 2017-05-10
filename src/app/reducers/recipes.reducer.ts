import { Action } from '@ngrx/store';
import  * as recipes  from '../actions/recipes.actions';
import {Recipe} from "../stores/recipe.store";

export type State = Recipe[]

const initialState: State = [];


export function recipeReducer(state = initialState, action: Action): any{

  switch (action.type) {

    case recipes.Actions.ADD_RECIPES:
      return action.payload;

    case recipes.Actions.CREATE_RECIPE:
      return [...state, action.payload];

    case recipes.Actions.UPDATE_RECIPE:
      return state.map(recipe => {
        return recipe.id === action.payload._id
          ? Object.assign({}, recipe, action.payload) : recipe;
      });

    case recipes.Actions.DELETE_RECIPE:
      return state.filter(recipe => {
        return recipe.id !== action.payload.id;
      });

    default:
      return state;
  }
}

export const getRecipes = (state: State) => state;
