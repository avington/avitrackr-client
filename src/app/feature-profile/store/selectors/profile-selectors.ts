import * as fromReducer from '../reducers';
import { createSelector } from '@ngrx/store';
import { getProfileEntity, getProfileLoaded, getProfileLoading, getProfileError } from '../reducers/profile-reducer';

export const getProfileStateFromFeature = createSelector(
  fromReducer.getFeatureProfileState,
  (state: fromReducer.FeatureProfileState) => state.profile
);

export const getEntityFromProfileState = createSelector(getProfileStateFromFeature, getProfileEntity);
export const getLoadingFromProfileState = createSelector(getProfileStateFromFeature, getProfileLoading);
export const getLoadedFromProfileState = createSelector(getProfileStateFromFeature, getProfileLoaded);
export const getErrorFromProfileState = createSelector(getProfileStateFromFeature, getProfileError);
