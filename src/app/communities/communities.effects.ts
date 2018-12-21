import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CommunitiesService } from './communities.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { List } from '../models/list';
import { CommunityPost } from '../models/communityPost';
import { LoadCommunityPostsFail, LoadCommunityPostsSuccess } from './communities.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class CommunitiesEffects {
  constructor(private actions$: Actions,
              private service: CommunitiesService) {
  }

  @Effect() loadCommunityPosts$ = this.actions$.pipe(
    ofType('LOAD_COMMUNITY_POSTS'),
    switchMap(() => this.service.loadCommunityPosts().pipe(
      map((res: List<CommunityPost>) => new LoadCommunityPostsSuccess(res)),
      catchError((error: HttpErrorResponse) => of(new LoadCommunityPostsFail(error)))
    ))
  );
}
