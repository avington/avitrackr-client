import { createSelector } from '@ngrx/store';
import {
  getFeatureMyTaskState,
  FeatureTaskListState,
  getMyTaskStatusList,
  getMyTaskStatusListLoading,
  getMyTaskStatusListLoaded
} from '../reducers';

export const getMyTaskStatusesStateFromFeature = createSelector(
  getFeatureMyTaskState,
  (state: FeatureTaskListState) => state.myTaskStatusList
);

export const getMyTaskStatusListFromState = createSelector(getMyTaskStatusesStateFromFeature, getMyTaskStatusList);

export const getMyTaskStatusListLoadingFromState = createSelector(
  getMyTaskStatusesStateFromFeature,
  getMyTaskStatusListLoading
);

export const getMyTaskStatusListLoadedFromState = createSelector(
  getMyTaskStatusesStateFromFeature,
  getMyTaskStatusListLoaded
);
