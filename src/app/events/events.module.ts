import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventsListComponent } from './events-list/events-list.component';

@NgModule({
  declarations: [
    EventsListComponent,
    EventsDetailsComponent
  ],
  imports [
    CommonModule,
    StoreDevtoolsModule,
    StoreModule
  ]
)}

export class EventsModule {}

