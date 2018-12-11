import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { ParishPostsComponent } from './parish-posts/parish-posts.component';
import { ParishDisplayComponent } from './parish-display/parish-display.component';

@NgModule({
  declarations: [
    ParishDisplayComponent,
    ParishPostsComponent
  ],
  imports: [
    CommonModule,
    StoreDevtoolsModule,
    StoreModule
  ]
})

export class ParishModule {
}

