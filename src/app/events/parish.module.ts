import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParishPostsComponent } from './parish-posts/parish-posts.component';
import { ParishDisplayComponent } from './parish-display/parish-display.component';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { ParishMainComponent } from './parish-main/parish-main.component';
import { ParishRoutingModule } from './parish.routing.module';

@NgModule({
  declarations: [
    ParishDisplayComponent,
    ParishPostsComponent,
    ParishMainComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    ParishRoutingModule
  ]
})

export class ParishModule {
}

