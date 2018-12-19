import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ParishService } from './parish.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  LoadCommunityDetailsFail,
  LoadCommunityDetailsSuccess,
  LoadCommunityPostsSuccess, LoadEventDetailsFail, LoadEventDetailsSuccess, LoadEventsListFail,
  LoadEventsListSuccess,
  LoadParishFail,
  LoadParishSuccess,
  LoadPostsListFail,
  LoadPostsListSuccess
} from './parish.actions';
import { of } from 'rxjs';
import { Parish } from '../models/parish';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../models/post';
import { List } from '../models/list';
import { Community } from '../models/community';
import { ParishEvent } from '../models/parishEvent';
import { CommunityPost } from '../models/communityPost';

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
  );

    @Effect() loadPostsList$ = this.actions$.pipe(
      ofType('LOAD_POSTS_LIST'),
      switchMap(() => this.service.loadPosts().pipe(
        map((res: List<Post>) => new LoadPostsListSuccess(res)),
        catchError((error: any) => of(new LoadPostsListFail(error)))
      ))
    );

    @Effect() loadCommunity$ = this.actions$.pipe(
      ofType('LOAD_COMMUNITY_POSTS'),
      switchMap(() => this.service.loadCommunityPosts().pipe(
        map((res: List<Community>) => new LoadCommunityPostsSuccess((res)),
          catchError((error: any) => of(new LoadPostsListFail(error))))
      ))
    );

    @Effect() loadEventsList$ = this.actions$.pipe(
      ofType('LOAD_EVENTS_LIST'),
      switchMap(() => this.service.loadEventsPosts().pipe(
        map((res: List<ParishEvent>) => new LoadEventsListSuccess(res)),
        catchError((error: any) => of(new LoadEventsListFail(error)))
      ))
    );

    @Effect() loadCommunityDetails$ = this.actions$.pipe(
      ofType('LOAD_COMMUNITY_DETAILS'),
      switchMap(() => this.service.loadCommunityDetails().pipe(
        map((res: List<CommunityPost>) => new LoadCommunityDetailsSuccess(res)),
        catchError((error: any) => of(new LoadCommunityDetailsFail(error)))
      ))
    );

    @Effect() loadEventDetails$ = this.actions$.pipe(
      ofType('LOAD_EVENT_DETAILS'),
      switchMap(() => this.service.loadEventDetails().pipe(
        map((res: ParishEvent) => new LoadEventDetailsSuccess(res)),
        catchError((error: any) => of(new LoadEventDetailsFail(error)))
      ))
    );
}
