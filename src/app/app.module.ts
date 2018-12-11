import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ParishDisplayComponent } from './events/parish-display/parish-display.component';
import { ParishPostsComponent } from './events/parish-posts/parish-posts.component';
import { ParishService } from './events/parish.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ParishEffects } from './events/parish.effects';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ParishDisplayComponent,
    ParishPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([
      ParishEffects
    ]),
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [ParishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
