import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromMyTaskListReducer from './my-tasks-reducer';

export interface FeatureTaskListState {
    myTaskList: fromMyTaskListReducer.MyTaskListState;
}

export const featureMyTaskReducers: ActionReducerMap<FeatureTaskListState> = {
    myTaskList: fromMyTaskListReducer.reducer
};

export const getFeatureMyTaskState = createFeatureSelector('featureMyTasks');

export * from './my-tasks-reducer';
