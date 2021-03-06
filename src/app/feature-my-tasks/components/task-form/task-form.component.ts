import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {
  MyTask,
  MyTaskStatus,
  Notification,
  NotificationLocation,
  NotificationTiming,
  NotificationType
} from '../../models/my-tasks';
import * as moment from 'moment';
import { NotificationGroupComponent } from '../notification-group/notification-group.component';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'avi-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Input()
  myTask: MyTask;

  @Input()
  statuses: MyTaskStatus[];

  @Input()
  notificationTypes: NotificationType[];

  @Output()
  submitted: EventEmitter<MyTask> = new EventEmitter<MyTask>();

  minExpiresAt: Date;
  maxExpiresAt: Date;

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this.minExpiresAt = new Date();
    this.maxExpiresAt = moment(this.minExpiresAt)
      .add(10, 'y')
      .toDate();
  }

  addNotification() {
    this.mapFormToModel();
    this.myTask.notifications.push({
      identifier: '',
      notificationTiming: { timingAmount: 15, timingAmountType: 'Minutes' },
      notificationType: { id: 1, notificationTypeName: 'Email' }
    });
    this.buildForm();
  }

  onRemoved($event) {
    this.myTask.notifications = this.myTask.notifications.filter(
      (item: Notification, index: number) => $event !== index
    );

    this.buildForm();
  }

  onSubmit() {
    this.mapFormToModel();
    this.submitted.emit(this.myTask);
  }

  private buildForm() {
    this.taskForm = this.fb.group({
      taskName: [this.myTask.taskName, [Validators.required]],
      taskDescription: [this.myTask.taskDescription],
      startsAt: [this.myTask.startsAt],
      startsAtTime: [this.myTask.startsAtTime],
      expiresAt: [this.myTask.expiresAt, [Validators.required]],
      expiresAtTime: [this.myTask.expiresAt],
      status: [this.myTask.status, [Validators.required]],
      notifications: this.buildNotification(this.myTask.notifications),
      showBusy: [this.myTask.showBusy],
      isVisible: [this.myTask.isVisible]
    });
  }

  private buildNotification(notifications: Notification[]) {
    return this.fb.array([
      ...notifications.map((notification: Notification) => {
        return NotificationGroupComponent.buildNotificationFormGroup(notification);
      })
    ]);
  }

  private mapFormToModel() {
    const formValues = this.taskForm.value;

    const notifications: Notification[] = formValues.notifications.map(n => {
      const notification: Notification = {
        identifier: n.identifier,
        notificationTiming: { timingAmount: n.notificationAmount, timingAmountType: n.notificationAmountType },
        notificationType: { id: n.notificationType.id, notificationTypeName: n.notificationType.notificationTypeName }
      };
      return notification;
    });

    this.myTask = { ...this.myTask, ...formValues, notifications };
  }
}
