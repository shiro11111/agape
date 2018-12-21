import { RouterModule, Routes } from '@angular/router';
import { CommunityDetailsComponent } from './community-details/community-details.component';
import { NgModule } from '@angular/core';
import { CommunitiesMainComponent } from './communities-main/communities-main.component';

// const routes: Routes = [
//   { path: 'details/:id', component: CommunityDetailsComponent }
// ];

const routes: Routes = [
  { path: '',
  component: CommunitiesMainComponent,
  children: [
    {path: '', pathMatch: 'full', redirectTo: 'tab1'},
    { path: 'details/:id', component: CommunityDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CommunitiesRoutingModule {}
