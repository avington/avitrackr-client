import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './containers/profile-page/profile-page.component';
import { SharedLayoutsModule } from '../shared-layouts/shared-layouts.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileSideNavComponent } from './components/profile-side-nav/profile-side-nav.component';

const ROUTES: Routes = [{ path: '', component: ProfilePageComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), HttpClientModule, SharedLayoutsModule],
  declarations: [ProfilePageComponent, ProfileSideNavComponent]
})
export class FeatureProfileModule {}
