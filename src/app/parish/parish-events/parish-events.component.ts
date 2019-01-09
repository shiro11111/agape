import { Component, OnInit } from '@angular/core';
import { ParishEvent } from '../../models/parishEvent';
import { List } from '../../models/list';
import { Observable } from 'rxjs';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { LoadEventsList } from '../parish.actions';
import { ParishState } from '../parish.reducers';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { SetToolbarContentAction } from '../../toolbar/toolbar.actions';


@Component({
  selector: 'app-parish-events',
  templateUrl: './parish-events.component.html',
  styleUrls: ['./parish-events.component.css']
})
export class ParishEventsComponent implements OnInit {
  eventsList$: Observable<List<ParishEvent>>;

  constructor(private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadEventsList());

    this.store.dispatch(new SetToolbarContentAction('Parafia św. Łazarza'));

    this.eventsList$ = this.store.select('parishState').pipe(
      map((state: ParishState) => state && state.parishEvent));
  }

  onNavigateToDetails(id: number): void {
    this.router.navigate([`details/${id}`], {relativeTo: this.route});
  }
}
