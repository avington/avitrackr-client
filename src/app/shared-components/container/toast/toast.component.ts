import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'avi-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @ViewChild('notificationTemplate', {read: TemplateRef})
  notificationTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
