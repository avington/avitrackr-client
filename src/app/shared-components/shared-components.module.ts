import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryTaskListContainerComponent } from './container/summary-task-list-container/summary-task-list-container.component';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('sharedComponents', fromStore.sharedComponentReducers),
    EffectsModule.forFeature(fromStore.SHARED_COMPONENT_EFFECTS)
  ],
  declarations: [SummaryTaskListContainerComponent],
  exports: [SummaryTaskListContainerComponent]
})
export class SharedComponentsModule {}
