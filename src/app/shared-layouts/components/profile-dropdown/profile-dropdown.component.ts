import { Component, OnInit, Input } from '@angular/core';
import { fadeInAnimation } from '../../../animations/fadein-animation';

@Component({
  selector: 'avi-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss'],
  animations: fadeInAnimation
})
export class ProfileDropdownComponent implements OnInit {

  @Input() profileName: string;

  buttonState: string;

  constructor() {}

  ngOnInit() {
    this.buttonState = 'out';
  }

  toggleDropdownMenu() {
    this.buttonState = this.buttonState === 'in' ? 'out' : 'in';
  }
}
