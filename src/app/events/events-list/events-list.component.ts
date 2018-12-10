import { Component, OnInit } from '@angular/core';
import { ChurchEvent } from '../../events-interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadEventsList } from '../events.actions';
import { EventsService } from '../events.service';
import { map } from 'rxjs/operators';
import { EventsState } from '../events.reducers';

@Component({
  selector: 'app-wydarzenia-lista',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  list$: Observable<ChurchEvent[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadEventsList());

    this.list$ = this.store.select('eventsState').pipe(
      map((state: EventsState) => state && state.list));
  }

}
