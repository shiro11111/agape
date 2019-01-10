import { Component, OnInit } from '@angular/core';
import { Community } from '../../models/community';
import { Observable } from 'rxjs';
import { List } from '../../models/list';
import { AppState, getParishState } from '../../app.reducers';
import { createSelector, select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getParishCommunityListState, ParishState } from '../parish.reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadCommunities } from '../parish.actions';
import { SetToolbarContentAction } from '../../toolbar/toolbar.actions';
import {
  communityItemsSelector,
  communityListCountSelector,
  communityParishers,
  getCommunityListImages,
  testSelector
} from '../parish.selectors';

@Component({
  selector: 'app-parish-communities',
  templateUrl: './parish-communities.component.html',
  styleUrls: ['./parish-communities.component.css']
})
export class ParishCommunitiesComponent implements OnInit {
  communityList$: Observable<List<Community>>;
  communities$: Observable<Community[]>;
  parisherCount$: Observable<number>;

  constructor(private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadCommunities());

    this.store.dispatch(new SetToolbarContentAction('Parafia świ. Łazarza'));

    this.store.pipe(select(testSelector)).subscribe((items) => {
      console.log(items);
    });

    // this.communityList$ = this.store.select('parishState').pipe(
    //   map((state: ParishState) => state && state.community));

    this.communities$ = this.store.pipe(select(communityItemsSelector));

    this.parisherCount$ = this.store.pipe(select(communityParishers));

    this.parisherCount$.subscribe((count: number) => {
      console.log(count);
    });

  }

  onNavigateToDetails(id: number): void {
    this.router.navigate([`../../communities/details/${id}`], { relativeTo: this.route });
  }
}

