import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MyTask, MyTaskStatus } from '../../models/my-tasks';

@Component({
  selector: 'avi-my-task-card',
  templateUrl: './my-task-card.component.html',
  styleUrls: ['./my-task-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush;
})
export class MyTaskCardComponent implements OnInit {

  @Input() myTask: MyTask;
  @Input() statuses: string[];

  statusMenu: { text: string, items: { text: string }[] }[];

  constructor() { }

  ngOnInit() {

    this.statusMenu = [{
      text: this.myTask.status.statusName,
      items: this.statuses.map((status: string) => {
        return { text: status };
      })
    }];

  }

}
