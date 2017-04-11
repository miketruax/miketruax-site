import {
  combineReducers
} from '@ngrx/store'

import * as fromRecipes from './recipes.reducer'
import {compose} from "@ngrx/core/compose";


export interface State {
  recipes: fromRecipes.State
}

const reducers = {
  recipes: fromRecipes.default
};


export default compose(combineReducers)({
  recipes: reducers.recipes
});


export const getRecipeState = (state: State) => state.recipes;
