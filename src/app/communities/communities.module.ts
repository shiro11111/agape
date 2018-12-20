import { NgModule } from '@angular/core';
import { CommunityDetailsComponent } from './community-details/community-details.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { CommunitiesRoutingModule } from './communities-routing.module';

@NgModule({
  declarations: [CommunityDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    CommunitiesRoutingModule]
})

export class CommunitiesModule {
}
