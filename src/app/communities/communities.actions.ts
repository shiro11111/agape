import { Action } from '@ngrx/store';
import { CommunityPost } from '../models/communityPost';
import { List } from '../models/list';
import { HttpErrorResponse } from '@angular/common/http';

export const LOAD_COMMUNITY_POSTS = 'LOAD_COMMUNITY_POSTS';
export const LOAD_COMMUNITY_POSTS_SUCCESS = 'LOAD_COMMUNITY_POSTS_SUCCESS';
export const LOAD_COMMUNITY_POSTS_FAIL = 'LOAD_COMMUNITY_POSTS_FAIL';

export class LoadCommunityPosts implements Action {
  readonly type = LOAD_COMMUNITY_POSTS;
}

export class LoadCommunityPostsSuccess implements Action {
  readonly type = LOAD_COMMUNITY_POSTS_SUCCESS;

  constructor(public payload: List<CommunityPost>) {}
}

export class LoadCommunityPostsFail implements Action {
  readonly type = LOAD_COMMUNITY_POSTS_FAIL;

  constructor(public payload: HttpErrorResponse) {}
}

export type CommunityActions = LoadCommunityPosts | LoadCommunityPostsSuccess | LoadCommunityPostsFail;
