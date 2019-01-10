
import * as fromParishState from './parish/parish.reducers';
import * as fromToolbarState from './toolbar/toolbar.reducer';
import * as fromCommunityState from './communities/communities.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { parishReducer } from './parish/parish.reducers';
import { toolbarReducer } from './toolbar/toolbar.reducer';
import { communityReducer } from './communities/communities.reducers';


export interface AppState {
  parishState: fromParishState.ParishState;
  toolbarState: fromToolbarState.ToolbarState;
  communityState: fromCommunityState.CommunityState;
}

export const reducers: ActionReducerMap<AppState> = {
  parishState: parishReducer,
  communityState: communityReducer,
  toolbarState: toolbarReducer
};

export const getParishState = (state: AppState) => state.parishState;

export const getCommunitiesState = (state: AppState) => state.communityState;
