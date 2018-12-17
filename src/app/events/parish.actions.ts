import { Action } from '@ngrx/store';
import { Parish } from '../models/parish';
import { HttpErrorResponse } from '@angular/common/http';
import { List } from '../models/list';
import { Post } from '../models/post';
import { Community } from '../models/community';
import { ParishEvent } from '../models/parishEvent';


export const LOAD_PARISH = 'LOAD_PARISH';
export const LOAD_PARISH_SUCCESS = 'LOAD_PARISH_SUCCESS';
export const LOAD_PARISH_FAIL = 'LOAD_PARISH_FAIL';
export const LOAD_POSTS_LIST = 'LOAD_POSTS_LIST';
export const LOAD_POSTS_LIST_SUCCESS = 'LOAD_POSTS_LIST_SUCCESS';
export const LOAD_POSTS_LIST_FAIL = 'LOAD_POSTS_LIST_FAIL';
export const LOAD_COMMUNITY_POSTS = 'LOAD_COMMUNITY_POSTS';
export const LOAD_COMMUNITY_POSTS_SUCCESS = 'LOAD_COMMUNITY_POSTS_SUCCESS';
export const LOAD_COMMUNITY_POSTS_FAIL = 'LOAD_COMMUNITY_POSTS_FAIL';
export const LOAD_EVENTS_LIST = 'LOAD_EVENTS_LIST';
export const LOAD_EVENTS_LIST_SUCCESS = 'LOAD_EVENTS_LIST_SUCCESS';
export const LOAD_EVENTS_LIST_FAIL = 'LOAD_EVENTS_LIST_FAIL';



export class LoadParish implements Action {
  readonly type = LOAD_PARISH;
}

export class LoadParishSuccess implements Action {
  readonly type = LOAD_PARISH_SUCCESS;

  constructor(public payload: Parish) {}
}

export class LoadParishFail implements Action {
  readonly type = LOAD_PARISH_FAIL;

  constructor(public payload: HttpErrorResponse) {}
}

export class LoadPostsList implements Action {
  readonly type = LOAD_POSTS_LIST;
}

export class LoadPostsListSuccess implements Action {
  readonly type = LOAD_POSTS_LIST_SUCCESS;

  constructor(public payload: List<Post>) {}
}

export class LoadPostsListFail implements Action {
  readonly type = LOAD_POSTS_LIST_FAIL;

  constructor(public payload: HttpErrorResponse) {}
}

export class LoadCommunityPosts implements Action {
  readonly type = LOAD_COMMUNITY_POSTS;
}

export class LoadCommunityPostsSuccess implements Action {
  readonly type = LOAD_COMMUNITY_POSTS_SUCCESS;

  constructor(public payload: List<Community>) {}
}

export class LoadCommunityPostsFail implements Action {
  readonly type = LOAD_COMMUNITY_POSTS_FAIL;

  constructor(public payload: HttpErrorResponse) {}
}

export class LoadEventsList implements Action {
  readonly type = LOAD_EVENTS_LIST;
}

export class LoadEventsListSuccess implements Action {
  readonly type = LOAD_EVENTS_LIST_SUCCESS;

  constructor(public payload: List<ParishEvent>) {}
}

export class LoadEventsListFail implements Action {
  readonly type = LOAD_EVENTS_LIST_FAIL;

  constructor(public payload: HttpErrorResponse) {}
}


export type ParishActions = LoadParish | LoadParishSuccess | LoadParishFail | LoadPostsList | LoadPostsListSuccess | LoadPostsListFail |
  LoadCommunityPosts | LoadCommunityPostsSuccess | LoadCommunityPostsFail | LoadEventsList | LoadEventsListSuccess | LoadEventsListFail;

