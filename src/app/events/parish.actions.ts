import { Action } from '@ngrx/store';
import { Parish } from '../models/parish';
import { HttpErrorResponse } from '@angular/common/http';
import { List } from '../models/list';
import { Post } from '../models/post';
import { Community } from '../models/community';
import { ParishEvent } from '../models/parishEvent';
import { CommunityPost } from '../models/communityPost';


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
export const LOAD_COMMUNITY_DETAILS = 'LOAD_COMMUNITY_DETAILS';
export const LOAD_COMMUNITY_DETAILS_SUCCESS = 'LOAD_COMMUNITY_DETAILS_SUCCESS';
export const LOAD_COMMUNITY_DETAILS_FAIL = 'LOAD_COMMUNITY_DETAILS_FAIL';
export const LOAD_EVENT_DETAILS = 'LOAD_EVENT_DETAILS';
export const LOAD_EVENT_DETAILS_SUCCESS = 'LOAD_EVENT_DETAILS_SUCCESS';
export const LOAD_EVENT_DETAILS_FAIL = 'LOAD_EVENT_DETAILS_SUCCESS_FAIL';



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

export class LoadCommunityDetails implements Action {
  readonly type = LOAD_COMMUNITY_DETAILS;
}

export class LoadCommunityDetailsSuccess implements Action {
  readonly type = LOAD_COMMUNITY_DETAILS_SUCCESS;

  constructor(public payload: List<CommunityPost>) {}
}

export class LoadCommunityDetailsFail implements Action {
  readonly type = LOAD_COMMUNITY_DETAILS_FAIL;

  constructor(public payload: HttpErrorResponse) {}
}

export class LoadEventDetails implements Action {
  readonly type = LOAD_EVENT_DETAILS;
}

export class LoadEventDetailsSuccess implements Action {
  readonly type = LOAD_EVENT_DETAILS_SUCCESS;

constructor(public payload: ParishEvent) {}
}

export class LoadEventDetailsFail implements Action {
  readonly type = LOAD_EVENT_DETAILS_FAIL;

  constructor(public payload: HttpErrorResponse) {}
}



export type ParishActions = LoadParish | LoadParishSuccess | LoadParishFail | LoadPostsList | LoadPostsListSuccess | LoadPostsListFail |
  LoadCommunityPosts | LoadCommunityPostsSuccess | LoadCommunityPostsFail | LoadEventsList | LoadEventsListSuccess | LoadEventsListFail |
  LoadCommunityDetails | LoadCommunityDetailsSuccess | LoadCommunityDetailsFail | LoadEventDetails | LoadEventDetailsSuccess |
  LoadEventDetailsFail;

