import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromMyTaskListReducer from './my-tasks-reducer';
import * as fromMyTaskReducer from './my-task-reducers';
import * as fromMyTaskStatusesReducer from './my-task-statuses-reducers';
import * as fromNotificationTypeReducer from './notification-types-reducers';
import * as fromUpdateTaskStatus from './update-status-task.reducers';

export interface FeatureTaskListState {
  myTaskList: fromMyTaskListReducer.MyTaskListState;
  myTaskEntity: fromMyTaskReducer.MyTaskState;
  myTaskStatusList: fromMyTaskStatusesReducer.MyTaskStatusesState;
  notificationTypeList: fromNotificationTypeReducer.NotificationTypeState;
  updateTaskStatus: fromUpdateTaskStatus.UpdateTaskStatusState;
}

export const featureMyTaskReducers: ActionReducerMap<FeatureTaskListState> = {
  myTaskList: fromMyTaskListReducer.reducer,
  myTaskEntity: fromMyTaskReducer.myTaskReducer,
  myTaskStatusList: fromMyTaskStatusesReducer.myTaskStatusReducer,
  notificationTypeList: fromNotificationTypeReducer.notificationTypeReducer,
  updateTaskStatus: fromUpdateTaskStatus.updateTaskStatusReducer
};

export const getFeatureMyTaskState = createFeatureSelector<FeatureTaskListState>('featureMyTasks');

export * from './my-tasks-reducer';
export * from './my-task-statuses-reducers';
export * from './my-task-reducers';
export * from './update-status-task.reducers';
