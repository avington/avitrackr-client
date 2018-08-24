import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromReducer from './profile-reducer';

export interface FeatureProfileState {
  profile: fromReducer.ProfileState;
}

export const featureProfileReducers: ActionReducerMap<FeatureProfileState> = {
  profile: fromReducer.reducer
};

export const getFeatureProfileState = createFeatureSelector<FeatureProfileState>('featureProfile');
