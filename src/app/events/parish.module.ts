import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParishPostsComponent } from './parish-posts/parish-posts.component';
import { ParishDisplayComponent } from './parish-display/parish-display.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { ParishMainComponent } from './parish-main/parish-main.component';
import { ParishRoutingModule } from './parish.routing.module';
import { ParishCommunitiesComponent } from './parish-communities/parish-communities.component';
import { ParishEventsComponent } from './parish-events/parish-events.component';

@NgModule({
  declarations: [
    ParishDisplayComponent,
    ParishPostsComponent,
    ParishMainComponent,
    ParishCommunitiesComponent,
    ParishEventsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    ParishRoutingModule
  ]
})

export class ParishModule {
}

