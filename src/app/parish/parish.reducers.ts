import { Parish } from '../models/parish';
import {
  LOAD_COMMUNITIES, LOAD_COMMUNITIES_FAIL, LOAD_COMMUNITIES_SUCCESS,
  LOAD_EVENT_DETAILS, LOAD_EVENT_DETAILS_FAIL, LOAD_EVENT_DETAILS_SUCCESS,
  LOAD_EVENTS_LIST,
  LOAD_EVENTS_LIST_FAIL,
  LOAD_EVENTS_LIST_SUCCESS,
  LOAD_PARISH,
  LOAD_PARISH_FAIL,
  LOAD_PARISH_SUCCESS,
  LOAD_POSTS_LIST,
  LOAD_POSTS_LIST_FAIL,
  LOAD_POSTS_LIST_SUCCESS,
  ParishActions
} from './parish.actions';
import { List } from '../models/list';
import { Post } from '../models/post';
import { Community } from '../models/community';
import { ParishEvent } from '../models/parishEvent';


export interface ParishState {
 display: Parish;
 list: List<Post>;
 community: List<Community>;
 parishEvent: List<ParishEvent>;
 eventDetails: ParishEvent;
}

const initialState: ParishState = {
  display: null,
  list: null,
  community: null,
  parishEvent: null,
  eventDetails: null
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
    case LOAD_COMMUNITIES:
      return {
        ...state
      };
    case LOAD_COMMUNITIES_SUCCESS:
      return {
        ...state,
        community: action.payload
      };
    case LOAD_COMMUNITIES_FAIL:
      return {
        ...state,
      };
    case LOAD_EVENTS_LIST:
      return {
        ...state
      };
    case LOAD_EVENTS_LIST_SUCCESS:
      return {
        ...state,
        parishEvent: action.payload
      };
    case LOAD_EVENTS_LIST_FAIL:
      return {
        ...state,
      };
    case LOAD_EVENT_DETAILS:
      return {
        ...state
      };
    case LOAD_EVENT_DETAILS_SUCCESS:
      return {
        ...state,
        eventDetails: action.payload
      };
    case LOAD_EVENT_DETAILS_FAIL:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}
