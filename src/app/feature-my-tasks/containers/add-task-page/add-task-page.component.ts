import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import {
  getMyTaskStatusListLoadedFromState,
  getMyTaskStatusListLoadingFromState,
  getMyTaskStatusListFromState
} from '../../store/selectors/my-task-statuses-selectors';
import { MyTask, MyTaskStatus } from '../../models/my-tasks';

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

  constructor(private store: Store<fromStore.FeatureTaskListState>) {}

  ngOnInit() {
    this.myTask = this.newTask();

    this.store.select(getMyTaskStatusListLoadedFromState).subscribe((b: boolean) => {
      if (!b) {
        this.store.dispatch(new fromStore.MyTaskStatusesLoad());
      }
    });

    this.isLoadingMyTaskStatuses$ = this.store.select(getMyTaskStatusListLoadingFromState);
    this.statuses$ = this.store.select(getMyTaskStatusListFromState);
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
