import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromSharedComponentStore from '../../store';

@Component({
  selector: 'avi-summary-task-list-container',
  templateUrl: './summary-task-list-container.component.html',
  styleUrls: ['./summary-task-list-container.component.scss']
})
export class SummaryTaskListContainerComponent implements OnInit {
  private taskSummaryLoading$: Observable<boolean>;
  private taskSummaryLoaded$: Observable<boolean>;
  private taskSummaryList$: Observable<any[]>;

  constructor(private store: Store<fromSharedComponentStore.SharedComponentsState>) {}

  ngOnInit() {
    this.store.dispatch(new fromSharedComponentStore.Load());
  }
}
