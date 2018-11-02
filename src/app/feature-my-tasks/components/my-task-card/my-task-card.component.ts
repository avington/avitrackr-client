import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MyTask, MyTaskStatus } from '../../models/my-tasks';
import * as moment from 'moment';

@Component({
  selector: 'avi-my-task-card',
  templateUrl: './my-task-card.component.html',
  styleUrls: ['./my-task-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTaskCardComponent implements OnInit {

  @Input() myTask: MyTask;
  @Input() statuses: string[];

  statusMenu: { text: string, items: { text: string }[] }[];

  isRed = false;
  isGreen = false;
  isYellow = false;

  constructor() { }

  ngOnInit() {

    this.statusMenu = [{
      text: this.myTask.status.statusName,
      items: this.statuses.map((status: string) => {
        return { text: status };
      })
    }];

    console.log(moment(this.myTask.expiresAt));
    if (moment(this.myTask.expiresAt).isBefore(moment().add(-1, 'days'))) {
      this.isRed = true;
    } else if (moment(this.myTask.expiresAt).isBefore(moment())) {
      this.isYellow = true;
    } else {
      this.isGreen = true;
    }

  }

}
