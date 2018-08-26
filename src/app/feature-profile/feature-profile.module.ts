import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './containers/profile-page/profile-page.component';
import { SharedLayoutsModule } from '../shared-layouts/shared-layouts.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileSideNavComponent } from './components/profile-side-nav/profile-side-nav.component';
import { EditProfilePageComponent } from './containers/edit-profile-page/edit-profile-page.component';
import { ProfileSummaryComponent } from './components/profile-summary/profile-summary.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import * as fromStore from './store';
import { CORE_PROVIDERS } from '../core/services';
import { FEATURE_PROFILE_PROVIDERS } from 'src/app/feature-profile/services';
import { EffectsModule } from '@ngrx/effects';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../../environments/environment';

const ROUTES: Routes = [
  { path: '', component: ProfilePageComponent },
  { path: 'edit', component: EditProfilePageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    SharedLayoutsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('featureProfile', fromStore.featureProfileReducers),
    EffectsModule.forFeature([...fromStore.FEATURE_PROFILE_EFFECTS]),
    ToastrModule.forRoot(environment.toasterSettings.module),
  ],
  declarations: [
    ProfilePageComponent,
    ProfileSideNavComponent,
    EditProfilePageComponent,
    ProfileSummaryComponent,
    ProfileEditComponent
  ],
  providers: [...CORE_PROVIDERS, ...FEATURE_PROFILE_PROVIDERS]
})
export class FeatureProfileModule {}
