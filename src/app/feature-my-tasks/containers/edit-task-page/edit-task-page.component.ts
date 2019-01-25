import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

/* stores */
import * as fromStore from '../../store';
import * as fromRootStore from '../../../store';

/* selectors */
import { getMyTaskEntityFromFeatureState } from '../../store/selectors/my-task-selectors';
import {
  getMyTaskStatusListLoadedFromState,
  getMyTaskStatusListLoadingFromState,
  getMyTaskStatusListFromState
} from '../../store/selectors/my-task-statuses-selectors';
import {
  getNotificationTypesLoadedFromState,
  getNotificationTypesFromState
} from '../../store/selectors/notification-types-selectors';

// models
import { MyTask, MyTaskStatus, NotificationType } from '../../models/my-tasks';

@Component({
  selector: 'avi-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.scss']
})
export class EditTaskPageComponent implements OnInit {

  myTask$: Observable<MyTask>;
  statuses$: Observable<MyTaskStatus[]>;
  notificationTypes$: Observable<NotificationType[]>;

  constructor(private store: Store<fromStore.UpdateTaskStatusState>, private rootStore: Store<fromRootStore.State>) { }

  ngOnInit() {
    this.store.select(getMyTaskStatusListLoadedFromState).subscribe((b: boolean) => {
      if (!b) {
        this.store.dispatch(new fromStore.MyTaskStatusesLoad());
      }
    });

    this.myTask$ = this.store.select(getMyTaskEntityFromFeatureState);
    this.statuses$ = this.store.select(getMyTaskStatusListFromState);
    this.notificationTypes$ = this.store.select(getNotificationTypesFromState);
  }

}
