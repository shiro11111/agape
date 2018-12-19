
import * as fromParishState from './events/parish.reducers';
import * as fromToolbarState from './toolbar/toolbar.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { parishReducer } from './events/parish.reducers';
import { toolbarReducer } from './toolbar/toolbar.reducer';


export interface AppState {
  parishState: fromParishState.ParishState;
  toolbarState: fromToolbarState.ToolbarState;
}

export const reducers: ActionReducerMap<AppState> = {
  parishState: parishReducer,
  toolbarState: toolbarReducer
}
