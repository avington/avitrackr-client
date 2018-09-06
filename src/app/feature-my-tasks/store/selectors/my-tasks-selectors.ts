import { createSelector } from '@ngrx/store';
import * as fromReducer from '../reducers';

export const getMyTaskStateFromFeatureState = createSelector(
  fromReducer.getFeatureMyTaskState,
  (state: fromReducer.FeatureTaskListState) => state.myTaskList
);

export const getMyTasksListFromState = createSelector(
  getMyTaskStateFromFeatureState,
  (state: fromReducer.MyTaskListState) => state.list
);
export const getMyTasksPagingInfoFromState = createSelector(
  getMyTaskStateFromFeatureState,
  (state: fromReducer.MyTaskListState) => state.pagingInfo
);

export const getMyTasksLoadingFromState = createSelector(
  getMyTaskStateFromFeatureState,
  (state: fromReducer.MyTaskListState) => state.loading
);

export const getMyTasksLoadedFromState = createSelector(
  getMyTaskStateFromFeatureState,
  (state: fromReducer.MyTaskListState) => state.loaded
);

export const getMyTasksErrorFromState = createSelector(
  getMyTaskStateFromFeatureState,
  (state: fromReducer.MyTaskListState) => state.error
);
