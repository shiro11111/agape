import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ParishMainComponent } from './parish-main/parish-main.component';
import { ParishPostsComponent } from './parish-posts/parish-posts.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'posts'
  // },
  {
    path: '',
    pathMatch: 'full',
    component: ParishMainComponent,
    children: [
      { path: '', redirectTo: 'main' },
      { path: 'main', pathMatch: 'full', component: ParishPostsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ParishRoutingModule {}
