import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyTask, MyTaskStatus } from '../../models/my-tasks';
import { PagingInfo } from 'src/app/core/models/paging-model';

@Component({
  selector: 'avi-my-task-list',
  templateUrl: './my-task-list.component.html',
  styleUrls: ['./my-task-list.component.scss']
})
export class MyTaskListComponent implements OnInit {

  @Input() myTasks: MyTask[];
  @Input() pagingInfo: PagingInfo;
  @Input() statuses: MyTaskStatus[];

  @Output() statusSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
