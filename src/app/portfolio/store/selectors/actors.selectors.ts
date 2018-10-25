import * as fromActors from '../reducers/actors.reducer'
import * as fromRoot from '../reducers'
import { createSelector } from '@ngrx/store';

export const getAllActors = createSelector(fromRoot.getActorsState, fromActors.getAllActors);
