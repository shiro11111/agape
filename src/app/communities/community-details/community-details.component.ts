import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { CommunityPost } from '../../models/communityPost';
import { List } from '../../models/list';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommunityState } from '../communities.reducers';
import { LoadCommunityPosts } from '../communities.actions';
import { SetToolbarContentAction } from '../../toolbar/toolbar.actions';

@Component({
  selector: 'app-community-details',
  templateUrl: './community-details.component.html',
  styleUrls: ['./community-details.component.css']
})
export class CommunityDetailsComponent implements OnInit {
  communityPosts$: Observable<List<CommunityPost>>;
  toolbarContent$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadCommunityPosts());

    this.communityPosts$ = this.store.select('communityState').pipe(
      map((state: CommunityState) => state && state.communityPosts));

    this.store.dispatch(new SetToolbarContentAction('Wspólnota'));
  }
}
