import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'avi-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  @Input()
  isLoading: boolean;

  constructor() {}

  ngOnInit() {}
}
