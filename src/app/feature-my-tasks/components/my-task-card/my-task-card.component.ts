import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
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

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

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

    if (moment(this.myTask.expiresAt).isBefore(moment().add(-1, 'days'))) {
      this.isRed = true;
    } else if (moment(this.myTask.expiresAt).isBefore(moment())) {
      this.isYellow = true;
    } else {
      this.isGreen = true;
    }

  }

  onItemSelected($event) {

    const itemText = $event.item.text;
    if (itemText === this.myTask.status.statusName) {
      return;
    }

    this.selected.emit({
      selected: itemText,
      task: this.myTask
    });

    const menu = { ...this.statusMenu[0], text: itemText };
    this.statusMenu = [menu];


  }

}
