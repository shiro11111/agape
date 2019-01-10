import { createSelector } from '@ngrx/store';
import { getCommunitiesState } from '../app.reducers';
import { getCommunitiesListState } from './communities.reducers';
import { List } from '../models/list';
import { CommunityPost } from '../models/communityPost';

const getCommunitiesPostsState = createSelector(getCommunitiesState, getCommunitiesListState);


export const communitiesPostsList = createSelector(
  getCommunitiesPostsState,
  (state: List<CommunityPost>) => state && state.items as CommunityPost[]
);

export const getPostsIds = createSelector(
  communitiesPostsList,
  (state: CommunityPost[]) => state && state.filter((post: CommunityPost) => post.id) as CommunityPost []
);





