import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTasksPageComponent } from './containers/my-tasks-page/my-tasks-page.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedLayoutsModule } from '../shared-layouts/shared-layouts.module';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { CORE_PROVIDERS } from '../core/services';

const ROUTES: Routes = [{ path: '', component: MyTasksPageComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    SharedLayoutsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(environment.toasterSettings.module)
  ],
  declarations: [MyTasksPageComponent],
  providers: [...CORE_PROVIDERS]
})
export class FeatureMyTasksModule {}
