import { Parish } from '../models/parish';
import {
  LOAD_COMMUNITY_POSTS, LOAD_COMMUNITY_POSTS_FAIL, LOAD_COMMUNITY_POSTS_SUCCESS,
  LOAD_PARISH,
  LOAD_PARISH_FAIL,
  LOAD_PARISH_SUCCESS,
  LOAD_POSTS_LIST, LOAD_POSTS_LIST_FAIL,
  LOAD_POSTS_LIST_SUCCESS,
  ParishActions
} from './parish.actions';
import { List } from '../models/list';
import { Post } from '../models/post';
import { Community } from '../models/community';

export interface ParishState {
 display: Parish;
 list: List<Post>;
 community: List<Community>;
}

const initialState: ParishState = {
  display: null,
  list: null,
  community: null
};

export function parishReducer(state = initialState, action: ParishActions) {
  switch (action.type) {
    case LOAD_PARISH:
      return {
        ...state,
        display: null
      };
    case LOAD_PARISH_SUCCESS:
      return {
        ...state,
        display: action.payload
      };
    case LOAD_PARISH_FAIL:
      return {
        ...state,
      };
    case LOAD_POSTS_LIST:
      return {
        ...state,
      };
    case LOAD_POSTS_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case LOAD_POSTS_LIST_FAIL:
      return {
        ...state
      };
    case LOAD_COMMUNITY_POSTS:
      return {
        ...state,
      };
    case LOAD_COMMUNITY_POSTS_SUCCESS:
      return {
        ...state,
        community: action.payload
      };
    case LOAD_COMMUNITY_POSTS_FAIL:
      return {
        ...state,
      };
    default:
      return {
        ...state
      };
  }
}
