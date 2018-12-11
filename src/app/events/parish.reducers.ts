import { Parish } from '../models/parish';
import { LOAD_PARISH, LOAD_PARISH_FAIL, LOAD_PARISH_SUCCESS, ParishActions } from './parish.actions';

export interface ParishState {
 display: Parish;
}

const initialState: ParishState = {
  display: null
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
    default:
      return {
        ...state
      };
  }
}
