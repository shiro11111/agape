import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EventsService } from './events.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ChurchEvent } from '../events-interface';
import { LoadEventsListFail, LoadEventsListSuccess } from './events.actions';
import { of } from 'rxjs';

@Injectable()
export class EventsEffects {
  constructor(private actions$: Actions,
              private service: EventsService) {
  }

  @Effect() loadEventsList$ = this.actions$.pipe(
    ofType('LOAD_EVENTS_LIST'),
    switchMap(() => this.service.loadEvents().pipe(
      map((res: ChurchEvent[]) => new LoadEventsListSuccess(res)),
      catchError((error: any) => of(new LoadEventsListFail(error)))
    ))
  );
