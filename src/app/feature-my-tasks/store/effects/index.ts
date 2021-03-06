import {MyTaskListEffects} from './my-task-list-effects';
import {MyTaskStatusesEffects} from './my-task-statuses-effects';
import {NotificationTypeEffects} from './notification-types-effects';
import {MyTaskEffects} from './my-task-effects';
import {UpdateTaskStatusEffects} from './update-task-status.effects';

export const MY_TASKS_EFFECTS: any[] = [
  MyTaskListEffects,
  MyTaskStatusesEffects,
  NotificationTypeEffects,
  MyTaskEffects,
  UpdateTaskStatusEffects
];
