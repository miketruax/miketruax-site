
import * as fromRecipes from './recipes.reducer'
import * as fromActors from './actors.reducer'
import * as fromMovies from './movies.reducer'
import * as fromSelectedMovie from './selectedMovies.reducer'
import{ActionReducerMap} from '@ngrx/store'



export interface State {
  recipes: fromRecipes.State,
  actors: fromActors.State,
  movies: fromMovies.State,
  selectedMovie: fromSelectedMovie.State
}

export const reducers: ActionReducerMap<State> =  {
  recipes: fromRecipes.recipeReducer,
  actors: fromActors.actorReducer,
  movies: fromMovies.moviesReducer,
  selectedMovie: fromSelectedMovie.selectedMoviesReducer
};


export const getRecipeState = (state: State) => state.recipes;
export const getActorsState = (state: State) => state.actors;
export const getMoviesState = (state: State) => state.movies;
export const getSelectedMoviesState = (state: State) => state.selectedMovie;
