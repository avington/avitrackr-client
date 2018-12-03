import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { MyTask, MyTaskStatus } from '../../models/my-tasks';
import { PagingInfo } from '../../../core/models/paging-model';

import {
  getMyTasksListFromState,
  getMyTasksPagingInfoFromState,
  getMyTasksLoadingFromState
} from '../../store/selectors/my-tasks-selectors';

import { MyTaskQuery } from '../../models/my-task-query';

import * as fromRootStore from '../../../store';

import {
  getMyTaskStatusListLoadedFromState, getMyTaskStatusListFromState
} from '../../store/selectors/my-task-statuses-selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'avi-my-tasks-page',
  templateUrl: './my-tasks-page.component.html',
  styleUrls: ['./my-tasks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTasksPageComponent implements OnInit {
  myTasks$: Observable<MyTask[]>;
  pageInfo: PagingInfo;
  pagingInfo$: Observable<PagingInfo>;
  isLoading$: Observable<boolean>;
  statuses: string[];

  constructor(private store: Store<fromStore.FeatureTaskListState>, private rootStore: Store<fromRootStore.State>) { }

  ngOnInit() {
    const queryInfo: MyTaskQuery = { skip: 0, openOnly: true, take: 10 };
    this.store.dispatch(new fromStore.Load(queryInfo));
    this.myTasks$ = this.store.select(getMyTasksListFromState);
    this.pagingInfo$ = this.store.select(getMyTasksPagingInfoFromState);
    this.isLoading$ = this.store.select(getMyTasksLoadingFromState);
    this.store.select(getMyTaskStatusListLoadedFromState).subscribe((b: boolean) => {
      if (!b) {
        this.store.dispatch(new fromStore.MyTaskStatusesLoad());
      }
    });
    this.store.select(getMyTaskStatusListFromState).pipe(
      filter(s => !!s)
    ).subscribe((items: MyTaskStatus[]) => {
      this.statuses = items.map((status: MyTaskStatus) => status.statusName);
    });

  }

  addTask() {
    this.rootStore.dispatch(new fromRootStore.GoAction({ path: ['/my-tasks/add'] }));
  }

  onStatusSelected($event) {
    console.log('event', $event);
  }
}
