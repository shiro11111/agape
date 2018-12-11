import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EventsService } from './events.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoadParishFail, LoadParishSuccess } from './events.actions';
import { of } from 'rxjs';
import { Parish } from '../models/parish';

@Injectable()
export class EventsEffects {
  constructor(private actions$: Actions,
              private service: EventsService) {
  }

  @Effect() loadParish$ = this.actions$.pipe(
    ofType('LOAD_PARISH'),
    switchMap(() => this.service.loadParish().pipe(
      map((res: Parish) => new LoadParishSuccess(res)),
      catchError((error: any) => of(new LoadParishFail(error)))
    ))
  )};
