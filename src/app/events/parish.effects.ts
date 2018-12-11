import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ParishService } from './parish.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoadParishFail, LoadParishSuccess } from './parish.actions';
import { of } from 'rxjs';
import { Parish } from '../models/parish';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ParishEffects {
  constructor(private actions$: Actions,
              private service: ParishService) {
  }

  @Effect() loadParish$ = this.actions$.pipe(
    ofType('LOAD_PARISH'),
    switchMap(() => this.service.loadParish().pipe(
      map((res: Parish) => new LoadParishSuccess(res)),
      catchError((error: HttpErrorResponse) => of(new LoadParishFail(error)))
    ))
  )};
