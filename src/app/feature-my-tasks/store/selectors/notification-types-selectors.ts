import { createSelector } from '@ngrx/store';
import { getFeatureMyTaskState, FeatureTaskListState } from '../reducers';
import {
  getNotificationTypeList,
  getNotificationTypeListLoading,
  getNotificationTypeListLoaded,
  getNotificationTypeListError
} from '../reducers/notification-types-reducers';

export const getNotificationTypeState = createSelector(
  getFeatureMyTaskState,
  (state: FeatureTaskListState) => state.notificationTypeList
);

export const getNotificationTypesFromState = createSelector(getNotificationTypeState, getNotificationTypeList);

export const getNotificationTypesLoadingFromState = createSelector(
  getNotificationTypeState,
  getNotificationTypeListLoading
);

export const getNotificationTypesLoadedFromState = createSelector(
  getNotificationTypeState,
  getNotificationTypeListLoaded
);

export const getNotificationTypesErrorFromState = createSelector(
  getNotificationTypeState,
  getNotificationTypeListError
);
