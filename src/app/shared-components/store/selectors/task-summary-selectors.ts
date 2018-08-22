import { createSelector } from '@ngrx/store';
import { getSharedComponentFeatureState, SharedComponentsState } from '../reducers';
import { TaskSummaryState } from '../reducers/task-summary-reducers';

export const getTaskSummaryStateFromFeature = createSelector(
  getSharedComponentFeatureState,
  (states: SharedComponentsState) => states.taskSummaries
);

export const getTaskSummaryLoadedFromState = createSelector(
  getTaskSummaryStateFromFeature,
  (state: TaskSummaryState) => state.loaded
);

export const getTaskSummaryLoadingFromState = createSelector(
  getTaskSummaryStateFromFeature,
  (state: TaskSummaryState) => state.loading
);

export const getTaskSummaryEntitiesFromState = createSelector(
  getTaskSummaryStateFromFeature,
  (state: TaskSummaryState) => state.entities
);
