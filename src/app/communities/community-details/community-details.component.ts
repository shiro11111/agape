import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { LoadCommunityDetails } from '../../events/parish.actions';
import { CommunityPost } from '../../models/communityPost';
import { List } from '../../models/list';
import { Observable } from 'rxjs';
import { ParishState } from '../../events/parish.reducers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-community-details',
  templateUrl: './community-details.component.html',
  styleUrls: ['./community-details.component.css']
})
export class CommunityDetailsComponent implements OnInit {
  communityDetails$: Observable<List<CommunityPost>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadCommunityDetails());

    this.communityDetails$ = this.store.select('parishState').pipe(
      map((state: ParishState) => state && state.communityDetails));
  }
}
