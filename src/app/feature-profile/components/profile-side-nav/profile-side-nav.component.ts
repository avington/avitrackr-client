import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'avi-profile-side-nav',
  templateUrl: './profile-side-nav.component.html',
  styleUrls: ['./profile-side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSideNavComponent implements OnInit {

  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
