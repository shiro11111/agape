import { createSelector } from '@ngrx/store';
import { List } from '../models/list';
import { Community } from '../models/community';
import { getParishState } from '../app.reducers';
import { getParishCommunityListState, getParishEventsListState, getParishPostsListState, } from './parish.reducers';
import { Image } from '../models/image';
import { ParishEvent } from '../models/parishEvent';
import { Post } from '../models/post';

const getParishCommunitiesState = createSelector(getParishState, getParishCommunityListState);

const getParishEventsState = createSelector(getParishState, getParishEventsListState);

const getParishPostsList = createSelector(getParishState, getParishPostsListState);


export const communityItemsSelector = createSelector(
  getParishCommunitiesState,
  (state: List<Community>) => state && state.items as Community[]
);

export const parishEventsListSelector = createSelector(
  getParishEventsState,
  (state: List<ParishEvent>) => state && state.items as ParishEvent[]
);

export const parishPostsListSelector = createSelector(
  getParishPostsList,
  (state: List<Post>) => state && state.items as Post[]
);

export const communityListCountSelector = createSelector(
  getParishCommunitiesState,
  (state: List<Community>) => state && state.maxResults as string
);

export const getCommunityListImages = createSelector(
  communityItemsSelector,
  (state: Community[]) => state && state.map((item: Community) => item.image)
);

export const communityParishers = createSelector(
  communityItemsSelector,
  (state: Community[]) => state && state.map((item: Community) => item.parishers).reduce((a: number, b: number) => a + b)
);

export const testSelector = createSelector(
  communityListCountSelector,
  getCommunityListImages,
  (count: string, images: Image[]) => images && images.map((image: Image) => ({
    ...image,
    maxResults: count
  }))
);

export const getLublinParishes = createSelector(
  parishPostsListSelector,
  (state: Post[]) => state && state.filter((post: Post) => post.parish.city === 'Lublin') as Post[]
);



