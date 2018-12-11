import { Parish } from '../models/parish';
import { ParishActions } from './events.actions';

export interface ParishState {
 display: Parish;
}

const initialState: ParishState = {
  display: null
};

export function parishReducer(state = initialState, action: ParishActions) {
  switch (action.type) {
    case 'LOAD_PARISH':
      return {
        ...state,
        display: null
      };
    case 'LOAD_PARISHSUCCESS':
      return {
        ...state,
        display: action.payload
      };
    case 'LOAD_PARISH_FAIL':
      return {
        ...state,
      };
    default:
      return {
        ...state
      };
  }
}
