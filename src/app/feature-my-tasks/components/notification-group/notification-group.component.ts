import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notification, NotificationType } from '../../models/my-tasks';
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

  @Input()
  notificationTypes: NotificationType[];

  @Output()
  removed: EventEmitter<number> = new EventEmitter<number>();

  listItems: string[] = ['Minutes', 'Hours', 'Days', 'Weeks', 'Months'];

  static buildNotificationFormGroup(notifcation: Notification) {
    return new FormGroup({
      notificationAmount: new FormControl(notifcation.notificationTiming.timingAmount),
      notificationAmountType: new FormControl(notifcation.notificationTiming.timingAmountType),
      notificationType: new FormControl(notifcation.notificationType)
    });
  }

  constructor() {}

  ngOnInit() {}
}
