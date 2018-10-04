import { createSelector } from '@ngrx/store';
import * as fromReducer from '../reducers';

export const getMyTaskListStateFromFeatureState = createSelector(
  fromReducer.getFeatureMyTaskState,
  (state: fromReducer.FeatureTaskListState) => state.myTaskList
);

export const getMyTasksListFromState = createSelector(
  getMyTaskListStateFromFeatureState,
  (state: fromReducer.MyTaskListState) => state.list
);
export const getMyTasksPagingInfoFromState = createSelector(
  getMyTaskListStateFromFeatureState,
  (state: fromReducer.MyTaskListState) => state.pagingInfo
);

export const getMyTasksLoadingFromState = createSelector(
  getMyTaskListStateFromFeatureState,
  (state: fromReducer.MyTaskListState) => state.loading
);

export const getMyTasksLoadedFromState = createSelector(
  getMyTaskListStateFromFeatureState,
  (state: fromReducer.MyTaskListState) => state.loaded
);

export const getMyTasksErrorFromState = createSelector(
  getMyTaskListStateFromFeatureState,
  (state: fromReducer.MyTaskListState) => state.error
);
