import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { ParishPostsComponent } from './parish-posts/parish-posts.component';
import { ParishDisplayComponent } from './parish-display/parish-display.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    MatCardModule,
    ParishDisplayComponent,
    ParishPostsComponent
  ],
  imports: [
    CommonModule
  ]
})

export class ParishModule {
}

