import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';

const initialState = { isAuthenticated: false, user: {} };

export const authReducer = createReducer(
  initialState,
  on(login, (state, action) => {
    return {
      isAuthenticated: true,
      user: { username: action.username, expiration: action.expirationDate },
    };
  }),
  on(logout, (state) => {
    return { isAuthenticated: false, user: {} };
  })
);
