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
import { ParishEventsComponent } from './parish-events/parish-events.component';
import { TruncatePipe } from './truncate-pipe';
import { ParishEventsDetailsComponent } from './parish-events-details/parish-events-details.component';
import { ParishCommunitiesComponent } from './parish-communities/parish-communities.component';


@NgModule({
  declarations: [
    ParishDisplayComponent,
    ParishPostsComponent,
    ParishMainComponent,
    ParishEventsComponent,
    ParishEventsDetailsComponent,
    ParishCommunitiesComponent,
    TruncatePipe
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

