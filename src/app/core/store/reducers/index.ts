import * as fromAuth from './auth-reducers';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface CoreState {
  auth: fromAuth.AuthState;
}

export const coreReducers: ActionReducerMap<CoreState> = {
  auth: fromAuth.reducer
};

export const getCoreState = createFeatureSelector<CoreState>('core');


