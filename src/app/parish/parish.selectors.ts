import { createSelector } from '@ngrx/store';
import { List } from '../models/list';
import { Community } from '../models/community';
import { getParishState } from '../app.reducers';
import { getParishCommunityListState } from './parish.reducers';
import { Image } from '../models/image';

const getParishCommunitiesState = createSelector(getParishState, getParishCommunityListState);


export const communityItemsSelector = createSelector(
  getParishCommunitiesState,
  (state: List<Community>) => state && state.items as Community[]
);

export const communityListCountSelector = createSelector(
  getParishCommunitiesState,
  (state: List<Community>) => state && state.maxResults as string
);

export const getCommunityListImages = createSelector(
  communityItemsSelector,
  (state: Community[]) => state && state.map((item: Community) => item.image)
);

export const testSelector = createSelector(
  communityListCountSelector,
  getCommunityListImages,
  (count: string, images: Image[]) => images && images.map((image: Image) => ({
    ...image,
    maxResults: count
  }))
);
