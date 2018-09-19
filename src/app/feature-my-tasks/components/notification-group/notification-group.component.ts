import { Component, OnInit, Input } from '@angular/core';
import { Notification } from '../../models/my-tasks';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'avi-notification-group',
  templateUrl: './notification-group.component.html',
  styleUrls: ['./notification-group.component.scss']
})
export class NotificationGroupComponent implements OnInit {
  @Input()
  index: number;

  @Input()
  notification: FormGroup;

  listItems: string[] = ['minutes', 'hours', 'days', 'weeks', 'months'];

  static buildNotificationFormGroup(notifcation: Notification) {
    return new FormGroup({
      notificationAmount: new FormControl(notifcation.notificationTiming.timingAmount),
      notificationAmountType: new FormControl(notifcation.notificationTiming.timingAmountType)
    });
  }

  constructor() {}

  ngOnInit() {}
}
