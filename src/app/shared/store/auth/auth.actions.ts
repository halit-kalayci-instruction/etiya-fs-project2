import { createAction, props } from '@ngrx/store';
import { TokenResponse } from '../../models/tokenResponse';

export const login = createAction(
  '[Auth] Login',
  props<{ username: string; expirationDate: Date }>()
);
export const logout = createAction('[Auth] Logout');
