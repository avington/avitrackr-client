import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromMyTaskListReducer from './my-tasks-reducer';
import * as fromMyTaskStatusesReducer from './my-task-statuses-reducers';
import * as fromNotificationTypeReducer from './notification-types-reducers';

export interface FeatureTaskListState {
  myTaskList: fromMyTaskListReducer.MyTaskListState;
  myTaskStatusList: fromMyTaskStatusesReducer.MyTaskStatusesState;
  notificationTypeList: fromNotificationTypeReducer.NotificationTypeState;
}

export const featureMyTaskReducers: ActionReducerMap<FeatureTaskListState> = {
  myTaskList: fromMyTaskListReducer.reducer,
  myTaskStatusList: fromMyTaskStatusesReducer.myTaskStatusReducer,
  notificationTypeList: fromNotificationTypeReducer.notificationTypeReducer
};

export const getFeatureMyTaskState = createFeatureSelector<FeatureTaskListState>('featureMyTasks');

export * from './my-tasks-reducer';
export * from './my-task-statuses-reducers';
