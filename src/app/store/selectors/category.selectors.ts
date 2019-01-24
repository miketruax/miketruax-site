import * as fromCategory from '../reducers/category.reducer'
import * as fromRoot from '../reducers'
import { createSelector } from '@ngrx/store';

export const getCategory = createSelector(fromRoot.getCategoryState, fromCategory.getCategory);