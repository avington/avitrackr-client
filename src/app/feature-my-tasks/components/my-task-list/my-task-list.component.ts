import { Component, OnInit, Input } from '@angular/core';
import { MyTask } from '../../models/my-tasks.interface';

@Component({
  selector: 'avi-my-task-list',
  templateUrl: './my-task-list.component.html',
  styleUrls: ['./my-task-list.component.scss']
})
export class MyTaskListComponent implements OnInit {

  @Input() myTasks: MyTask[];

  constructor() { }

  ngOnInit() {
  }

}
