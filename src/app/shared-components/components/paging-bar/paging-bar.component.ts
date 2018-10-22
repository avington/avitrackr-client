import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { PagingInfo } from 'src/app/core/models/paging-model';

@Component({
  selector: 'avi-paging-bar',
  templateUrl: './paging-bar.component.html',
  styleUrls: ['./paging-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagingBarComponent implements OnInit {

  @Input() pagingInfo: PagingInfo;

  constructor() { }

  ngOnInit() {
  }

}
