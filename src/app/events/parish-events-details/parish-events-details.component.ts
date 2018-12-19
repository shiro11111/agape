import { Component, OnInit } from '@angular/core';
import { ParishEvent } from '../../models/parishEvent';
import { Observable } from 'rxjs';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { LoadEventDetails } from '../parish.actions';
import { map } from 'rxjs/operators';
import { ParishState } from '../parish.reducers';

@Component({
  selector: 'app-parish-events-details',
  templateUrl: './parish-events-details.component.html',
  styleUrls: ['./parish-events-details.component.css']
})
export class ParishEventsDetailsComponent implements OnInit {
  eventDetails$: Observable<ParishEvent>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadEventDetails());

    this.eventDetails$ = this.store.select('parishState').pipe(
      map((state: ParishState) => state && state.eventDetails));
  }

}
