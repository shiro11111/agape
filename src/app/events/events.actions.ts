import { Action } from '@ngrx/store';
import { Parish } from '../models/parish';


export const LOAD_PARISH = 'LOAD_PARISH';
export const LOAD_PARISH_SUCCESS = 'LOAD_PARISHSUCCESS';
export const LOAD_PARISH_FAIL = 'LOAD_PARISH_FAIL';


export class LoadParish implements Action {
  readonly type = LOAD_PARISH;
}

export class LoadParishSuccess implements Action {
  readonly type = LOAD_PARISH_SUCCESS;

  constructor(public payload: Parish) {}
}

export class LoadParishFail implements Action {
  readonly type = LOAD_PARISH_FAIL;
}

export type ParishActions = LoadParish | LoadParishSuccess | LoadParishFail;

