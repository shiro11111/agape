import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ParishMainComponent } from './parish-main/parish-main.component';
import { ParishPostsComponent } from './parish-posts/parish-posts.component';
import { ParishCommunitiesComponent } from './parish-communities/parish-communities.component';
import { ParishEventsComponent } from './parish-events/parish-events.component';
import { CommunityDetailsComponent } from './community-details/community-details.component';
import { ParishEventsDetailsComponent } from './parish-events-details/parish-events-details.component';

const routes: Routes = [
  {
    path: '',
    component: ParishMainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'main' },
      { path: 'main', component: ParishPostsComponent },
      { path: 'communities', component: ParishCommunitiesComponent},
      { path: 'events', component: ParishEventsComponent },
      { path: 'communities/details/:id', component: CommunityDetailsComponent},
      { path: 'events/details/:id', component: ParishEventsDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ParishRoutingModule {
}
