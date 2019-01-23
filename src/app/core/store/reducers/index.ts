import * as fromAuth from './auth-reducers';
import * as fromNotification from './notification-reducers';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface CoreState {
  auth: fromAuth.AuthState;
  notifications: fromNotification.NotificationState;
}

export const coreReducers: ActionReducerMap<CoreState> = {
  auth: fromAuth.reducer,
  notifications: fromNotification.notificationReducer
};

export const getCoreState = createFeatureSelector<CoreState>('core');

export * from './auth-reducers';
export * from './notification-reducers';


