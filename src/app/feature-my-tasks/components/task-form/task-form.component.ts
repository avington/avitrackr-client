import { Component, OnInit, Input } from '@angular/core';
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

  onSubmit() {
    console.log(this.myTask);
  }

  private buildForm() {
    this.taskForm = this.fb.group({
      taskName: [this.myTask.taskName, [Validators.required]],
      taskDescription: [this.myTask.taskDescription],
      expiresAt: [this.myTask.expiresAt, [Validators.required]],
      expiresAtTime: [this.myTask.expiresAt],
      status: [this.myTask.status, [Validators.required]],
      notifications: this.buildNotification(this.myTask.notifications)
    });
  }

  private buildNotification(notifications: Notification[]) {
    return this.fb.array([
      ...notifications.map((notification: Notification) => {
        return NotificationGroupComponent.buildNotificationFormGroup(notification);
      })
      
    ]);
  }
}
