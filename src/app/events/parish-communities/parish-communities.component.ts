import { Component, OnInit } from '@angular/core';
import { Community } from '../../models/community';
import { Observable } from 'rxjs';
import { List } from '../../models/list';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ParishState } from '../parish.reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadCommunities } from '../parish.actions';

@Component({
  selector: 'app-parish-communities',
  templateUrl: './parish-communities.component.html',
  styleUrls: ['./parish-communities.component.css']
})
export class ParishCommunitiesComponent implements OnInit {
  communityList$: Observable<List<Community>>;

  constructor(private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadCommunities());

    this.communityList$ = this.store.select('parishState').pipe(
      map((state: ParishState) => state && state.community));
  }

  onNavigateToDetails(id: number): void {
    this.router.navigate([`../../communities/details/${id}`], { relativeTo: this.route });
  }
}

