
import * as fromParishState from './events/parish.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { parishReducer } from './events/parish.reducers';

export interface AppState {
  parishState: fromParishState.ParishState;
}

export const reducers: ActionReducerMap<AppState> = {
  parishState: parishReducer
}
