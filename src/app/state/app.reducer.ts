import { Action, createReducer, on } from '@ngrx/store';

export const initialState: any = {};

const _appReducer = createReducer(
  initialState,
  // Define your state change handlers here
);

export function appReducer(state: any, action: Action) {
  return _appReducer(state, action);
}
