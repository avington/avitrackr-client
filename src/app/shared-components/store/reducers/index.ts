import * as fromTaskSummaryReducer from './task-summary-reducers';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface SharedComponentsState {
  taskSummaries: fromTaskSummaryReducer.TaskSummaryState;
}

export const sharedComponentReducers: ActionReducerMap<SharedComponentsState> = {
  taskSummaries: fromTaskSummaryReducer.reducer
};

export const getSharedComponentFeatureState = createFeatureSelector<SharedComponentsState>('sharedComponents');
