import { RouterModule, Routes } from '@angular/router';
import { CommunityDetailsComponent } from './community-details/community-details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'details/:id', component: CommunityDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CommunitiesRoutingModule {}
