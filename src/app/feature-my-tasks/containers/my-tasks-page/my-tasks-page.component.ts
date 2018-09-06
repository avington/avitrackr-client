import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { MyTask } from '../../models/my-tasks.interface';
import { PagingInfo } from '../../../core/models/paging-model';
import { getMyTasksListFromState, getMyTasksPagingInfoFromState, getMyTasksLoadingFromState } from '../../store/selectors/my-tasks-selectors';
import { MyTaskQuery } from '../../models/my-task-query.interface';

@Component({
  selector: 'avi-my-tasks-page',
  templateUrl: './my-tasks-page.component.html',
  styleUrls: ['./my-tasks-page.component.scss']
})
export class MyTasksPageComponent implements OnInit {
  myTasks$: Observable<MyTask[]>;
  pageInfo$: Observable<PagingInfo>;
  isLoading$: Observable<boolean>

  constructor(private store: Store<fromStore.FeatureTaskListState>) {}

  ngOnInit() {
    const queryInfo: MyTaskQuery = {skip: 0, openOnly: true, take: 10};
    this.store.dispatch(new fromStore.Load(queryInfo));
    this.myTasks$ = this.store.select(getMyTasksListFromState);
    this.isLoading$ = this.store.select(getMyTasksLoadingFromState);
    this.pageInfo$ = this.store.select(getMyTasksPagingInfoFromState);
  }

  addTask() {
    
  }
}
