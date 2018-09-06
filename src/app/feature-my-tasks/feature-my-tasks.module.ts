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
import { StoreModule } from '@ngrx/store';

// store folder
import * as fromStore from './store';
import * as fromCoreGuards from '../core/guards';
import { MY_TASKS_PROVIDERS } from './services';
import { EffectsModule } from '@ngrx/effects';
import { MY_TASKS_EFFECTS } from './store/effects';
import { MyTaskListComponent } from './components/my-task-list/my-task-list.component';
import { AddTaskPageComponent } from './containers/add-task-page/add-task-page.component';
import { EditTaskPageComponent } from './containers/edit-task-page/edit-task-page.component';

const ROUTES: Routes = [
  { path: '', component: MyTasksPageComponent, canActivate: [fromCoreGuards.AuthGuard] },
  { path: 'add', component: AddTaskPageComponent, canActivate: [fromCoreGuards.AuthGuard] },
  { path: 'edit/:id', component: EditTaskPageComponent, canActivate: [fromCoreGuards.AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    SharedLayoutsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(environment.toasterSettings.module),

    // store
    StoreModule.forFeature('featureMyTasks', fromStore.featureMyTaskReducers),
    EffectsModule.forFeature(MY_TASKS_EFFECTS)
  ],
  declarations: [MyTasksPageComponent, MyTaskListComponent, AddTaskPageComponent, EditTaskPageComponent],
  providers: [...CORE_PROVIDERS, ...MY_TASKS_PROVIDERS, ...fromCoreGuards.CORE_GUARDS]
})
export class FeatureMyTasksModule {}
