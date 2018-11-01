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
import { TaskFormComponent } from './components/task-form/task-form.component';
import { DatePickerModule, TimePickerModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { MenuModule } from '@progress/kendo-angular-menu';
import { NotificationGroupComponent } from './components/notification-group/notification-group.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { MyTaskCardComponent } from './components/my-task-card/my-task-card.component';
import { InputsModule } from '@progress/kendo-angular-inputs';

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
    SharedComponentsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(environment.toasterSettings.module),

    // kendo
    DatePickerModule,
    TimePickerModule,
    DropDownsModule,
    ButtonsModule,
    InputsModule,
    MenuModule,

    // store
    StoreModule.forFeature('featureMyTasks', fromStore.featureMyTaskReducers),
    EffectsModule.forFeature(MY_TASKS_EFFECTS)
  ],
  declarations: [
    MyTasksPageComponent,
    MyTaskListComponent,
    AddTaskPageComponent,
    EditTaskPageComponent,
    TaskFormComponent,
    NotificationGroupComponent,
    MyTaskCardComponent
  ],
  providers: [...CORE_PROVIDERS, ...MY_TASKS_PROVIDERS, ...fromCoreGuards.CORE_GUARDS]
})
export class FeatureMyTasksModule { }
