import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { PagingInfo } from 'src/app/core/models/paging-model';
import { isNil } from 'lodash';

@Component({
  selector: 'avi-paging-bar',
  templateUrl: './paging-bar.component.html',
  styleUrls: ['./paging-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagingBarComponent implements OnInit {

  @Input() pagingInfo: PagingInfo;
  @Output() previousPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() nextPage: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    console.log(this.pagingInfo.previousSkip);
  }

  isNil(val: any) {
    return isNil(val);
  }

}
