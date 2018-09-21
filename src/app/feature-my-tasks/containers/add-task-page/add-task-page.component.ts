import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import {
  getMyTaskStatusListLoadedFromState,
  getMyTaskStatusListLoadingFromState,
  getMyTaskStatusListFromState
} from '../../store/selectors/my-task-statuses-selectors';
import { MyTask, MyTaskStatus, NotificationType } from '../../models/my-tasks';
import {
  getNotificationTypesLoadedFromState,
  getNotificationTypesFromState
} from '../../store/selectors/notification-types-selectors';

@Component({
  selector: 'avi-add-task-page',
  templateUrl: './add-task-page.component.html',
  styleUrls: ['./add-task-page.component.scss']
})
export class AddTaskPageComponent implements OnInit {
  isLoadingMyTask$: Observable<boolean>;
  isLoadingMyTaskStatuses$: Observable<boolean>;
  myTask: MyTask;
  statuses$: Observable<MyTaskStatus[]>;
  isNotificationTypesLoaded$: Observable<boolean>;
  isNotificationTypesLoading$: Observable<boolean>;
  notificationTypes$: Observable<NotificationType[]>;

  constructor(private store: Store<fromStore.FeatureTaskListState>) {}

  ngOnInit() {
    this.myTask = this.newTask();

    this.store.select(getNotificationTypesLoadedFromState).subscribe((b: boolean) => {});

    this.store.select(getMyTaskStatusListLoadedFromState).subscribe((b: boolean) => {
      if (!b) {
        this.store.dispatch(new fromStore.MyTaskStatusesLoad());
      }
    });

    this.store.select(getNotificationTypesLoadedFromState).subscribe((b: boolean) => {
      if (!b) {
        this.store.dispatch(new fromStore.LoadNotificationTypes());
      }
    });

    this.isNotificationTypesLoaded$ = this.store.select(getMyTaskStatusListLoadedFromState);
    this.isNotificationTypesLoading$ = this.store.select(getMyTaskStatusListLoadingFromState);
    this.statuses$ = this.store.select(getMyTaskStatusListFromState);
    this.notificationTypes$ = this.store.select(getNotificationTypesFromState);
  }

  private newTask(): MyTask {
    return {
      identifier: '',
      taskName: '',
      taskDescription: '',
      status: {
        id: 1
      },
      notifications: [
        {
          identifier: '',
          notificationTiming: { timingAmount: 15, timingAmountType: 'Minutes' },
          notificationType: { id: 1, notificationTypeName: 'Email' }
        }
      ]
    };
  }
}
