import { SET_TOOLBAR_CONTENT, ToolbarActions } from './toolbar.actions';

export interface ToolbarState {
  content: string;
}

const initialState: ToolbarState = {
  content: ''
}

export function toolbarReducer(state = initialState, action: ToolbarActions) {
  switch (action.type) {
    case SET_TOOLBAR_CONTENT:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
}
