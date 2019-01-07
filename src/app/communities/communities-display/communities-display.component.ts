import { Component, OnInit } from '@angular/core';
import { CommunityPost } from '../../models/communityPost';
import { List } from '../../models/list';
import { Observable } from 'rxjs';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { LoadCommunities } from '../../parish/parish.actions';
import { map } from 'rxjs/operators';
import { CommunityState } from '../communities.reducers';

@Component({
  selector: 'app-communities-display',
  templateUrl: './communities-display.component.html',
  styleUrls: ['./communities-display.component.css']
})
export class CommunitiesDisplayComponent implements OnInit {
  display$: Observable<List<CommunityPost>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadCommunities());

    this.display$ = this.store.select('communityState').pipe(
      map((state: CommunityState) => state && state.communityPosts));
  }

}
