import { Component, OnInit, Input } from '@angular/core';
import { MyTask } from '../../models/my-tasks';
import { PagingInfo } from 'src/app/core/models/paging-model';

@Component({
  selector: 'avi-my-task-list',
  templateUrl: './my-task-list.component.html',
  styleUrls: ['./my-task-list.component.scss']
})
export class MyTaskListComponent implements OnInit {

  @Input() myTasks: MyTask[];
  @Input() pagingInfo: PagingInfo;

  constructor() { }

  ngOnInit() {
  }

}
