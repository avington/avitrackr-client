import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { DefaultHeaderComponent } from './containers/default-header/default-header.component';
import { DefaultFooterComponent } from './containers/default-footer/default-footer.component';
import { RouterModule } from '@angular/router';
import { ProfileDropdownComponent } from './components/profile-dropdown/profile-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DefaultLayoutComponent],
  declarations: [DefaultLayoutComponent, DefaultHeaderComponent, DefaultFooterComponent, ProfileDropdownComponent]
})
export class SharedLayoutsModule { }
