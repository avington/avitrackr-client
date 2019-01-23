import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryTaskListContainerComponent } from './container/summary-task-list-container/summary-task-list-container.component';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { PagingBarComponent } from './components/paging-bar/paging-bar.component';
import { ToastComponent } from './container/toast/toast.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('sharedComponents', fromStore.sharedComponentReducers),
    RouterModule,
    EffectsModule.forFeature(fromStore.SHARED_COMPONENT_EFFECTS)
  ],
  declarations: [SummaryTaskListContainerComponent, PagingBarComponent, ToastComponent],
  exports: [SummaryTaskListContainerComponent, PagingBarComponent]
})
export class SharedComponentsModule { }
