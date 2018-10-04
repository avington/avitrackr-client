import { createSelector } from '@ngrx/store';
import * as fromReducer from '../reducers';

export const getMyTaskEntityStateFromFeatureState = createSelector(
  fromReducer.getFeatureMyTaskState,
  (state: fromReducer.FeatureTaskListState) => state.myTaskEntity
);

export const getMyTaskEntityFromFeatureState = createSelector(
  getMyTaskEntityStateFromFeatureState,
  fromReducer.getMyTaskEntity
);

export const getMyTaskEntityLoadingFromFeatureState = createSelector(
  getMyTaskEntityStateFromFeatureState,
  fromReducer.getMyTaskEntityLoading
);

export const getMyTaskEntityLoadedFromFeatureState = createSelector(
  getMyTaskEntityStateFromFeatureState,
  fromReducer.getMyTaskEntityLoaded
);

export const getMyTaskEntityErrorFromFeatureState = createSelector(
  getMyTaskEntityStateFromFeatureState,
  fromReducer.getMyTaskEntityError
);
