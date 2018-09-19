import { MyTasksService } from './my-tasks-data.service';
import { MyTaskStatusesService } from './my-task-status.service';
import { NotificationTypeDataService } from './notification-type-data.service';

export const MY_TASKS_PROVIDERS: any[] = [MyTasksService, MyTaskStatusesService, NotificationTypeDataService];
