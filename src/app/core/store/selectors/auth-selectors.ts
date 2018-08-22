import * as fromReducers from '../reducers';
import * as fromAuthReducer from '../reducers/auth-reducers';
import { createSelector } from '@ngrx/store';

export const getAuthState = createSelector(fromReducers.getCoreState, (state: fromReducers.CoreState) => state.auth);

export const getIsLoggedInFromState = createSelector(getAuthState, (state: fromAuthReducer.AuthState) => {
  return state.isLoggedIn;
});

export const getProfileNameFromState = createSelector(
  getAuthState,
  (state: fromAuthReducer.AuthState) => state.profileEmail
);
