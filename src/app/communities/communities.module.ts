import { NgModule } from '@angular/core';
import { CommunityDetailsComponent } from './community-details/community-details.component';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { CommunitiesRoutingModule } from './communities-routing.module';
import { CommunitiesMainComponent } from './communities-main/communities-main.component';
import { CommunitiesDisplayComponent } from './communities-display/communities-display.component';

@NgModule({
  declarations: [
    CommunityDetailsComponent,
    CommunitiesMainComponent,
    CommunitiesDisplayComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CommunitiesRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    CommunitiesRoutingModule
  ]
})

export class CommunitiesModule {
}
