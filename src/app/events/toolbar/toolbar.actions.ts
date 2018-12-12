import { Action } from '@ngrx/store';

export const SET_TOOLBAR_CONTENT = 'SET_TOOLBAR_CONTENT';

export class SetToolbarContentAction implements Action {
  readonly type = SET_TOOLBAR_CONTENT;

  constructor(public payload: string) {}
}

export type ToolbarActions = SetToolbarContentAction;
