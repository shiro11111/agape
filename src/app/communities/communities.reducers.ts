import { List } from '../models/list';
import { CommunityPost } from '../models/communityPost';
import { CommunityActions, LOAD_COMMUNITY_POSTS, LOAD_COMMUNITY_POSTS_FAIL, LOAD_COMMUNITY_POSTS_SUCCESS } from './communities.actions';

export interface CommunityState {
  communityPosts: List<CommunityPost>;
}

const initialState: CommunityState = {
  communityPosts: null
};

export function communityReducer(state = initialState, action: CommunityActions) {
  switch (action.type) {
    case LOAD_COMMUNITY_POSTS:
      return {
        ...state,
      };
    case LOAD_COMMUNITY_POSTS_SUCCESS:
      return {
        ...state,
        communityPosts: action.payload
      };
    case LOAD_COMMUNITY_POSTS_FAIL:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}

export const getCommunitiesListState = (state: CommunityState) => state.communityPosts;


