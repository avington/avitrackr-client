import { Component, OnInit, Input } from '@angular/core';
import { fadeInAnimation } from '../../../animations/fadein-animation';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'avi-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss'],
  animations: fadeInAnimation
})
export class ProfileDropdownComponent implements OnInit {
  @Input()
  profileName: string;

  buttonState: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.buttonState = 'out';
  }

  toggleDropdownMenu() {
    this.buttonState = this.buttonState === 'in' ? 'out' : 'in';
  }

  logout() {
    this.authService.logout();
  }
}
