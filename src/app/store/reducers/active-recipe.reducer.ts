import  * as ActiveRecipeActions  from '../actions/active-recipe.actions';
import { Recipe } from '../../models/recipe.model';

export type ActiveRecipeState = Recipe

const initialState: ActiveRecipeState = {};

export function activeRecipeReducer(state: ActiveRecipeState = initialState, action: ActiveRecipeActions.ActiveRecipeActions): ActiveRecipeState{

  switch (action.type) {

    case ActiveRecipeActions.SELECT_ACTIVE_RECIPE:
      return action.payload as Recipe;

    default:
      return state;
  }
}

export const getActiveRecipe = (state: ActiveRecipeState) => state;
