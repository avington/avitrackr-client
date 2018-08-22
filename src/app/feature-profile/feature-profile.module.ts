import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './containers/profile-page/profile-page.component';

const ROUTES: Routes = [{ path: '', component: ProfilePageComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [ProfilePageComponent]
})
export class FeatureProfileModule {}
