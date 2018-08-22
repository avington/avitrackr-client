import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MetaReducer, StoreModule } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CORE_PROVIDERS } from './core/services';
import { environment } from '../environments/environment';

import * as fromRootStore from './store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { FeatureHomeModule } from './feature-home/feature-home.module';
import { SharedLayoutsModule } from './shared-layouts/shared-layouts.module';
import * as fromCoreStore from './core/store';
import { SHARED_COMPONENT_PRODIVERS } from './shared-components/services';

const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // ngrx
    StoreModule.forRoot(fromRootStore.reducers, { metaReducers }),
    StoreModule.forFeature('core', fromCoreStore.coreReducers),
    EffectsModule.forRoot([...fromRootStore.rootEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    // custom modules
    FeatureHomeModule,
    SharedLayoutsModule
  ],
  providers: [...CORE_PROVIDERS, ...SHARED_COMPONENT_PRODIVERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
