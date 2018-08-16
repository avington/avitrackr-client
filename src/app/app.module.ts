import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MetaReducer, StoreModule} from '@ngrx/store';
import {storeFreeze} from 'ngrx-store-freeze';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CORE_PROVIDERS} from './core/services';
import {environment} from '../environments/environment';

import * as fromRootStore from './store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {FeatureHomeModule} from './feature-home/feature-home.module';
import {SharedLayoutsModule} from './shared-layouts/shared-layouts.module';
import * as fromCoreStore from './core/store';

const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // ngrx
    StoreModule.forRoot(fromRootStore.reducers, {metaReducers}),
    StoreModule.forFeature('core', fromCoreStore.coreReducers),
    EffectsModule.forRoot([...fromRootStore.rootEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    // custom modules
    FeatureHomeModule,
    SharedLayoutsModule
  ],
  providers: [
    ...CORE_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


