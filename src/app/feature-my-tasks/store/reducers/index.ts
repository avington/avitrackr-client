import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromMyTaskListReducer from './my-tasks-reducer';
import * as fromMyTaskStatusesReducer from './my-task-statuses-reducers';

export interface FeatureTaskListState {
  myTaskList: fromMyTaskListReducer.MyTaskListState;
  myTaskStatusList: fromMyTaskStatusesReducer.MyTaskStatusesState;
}

export const featureMyTaskReducers: ActionReducerMap<FeatureTaskListState> = {
  myTaskList: fromMyTaskListReducer.reducer,
  myTaskStatusList: fromMyTaskStatusesReducer.myTaskStatusReducer
};

export const getFeatureMyTaskState = createFeatureSelector<FeatureTaskListState>('featureMyTasks');

export * from './my-tasks-reducer';
export * from './my-task-statuses-reducers';
