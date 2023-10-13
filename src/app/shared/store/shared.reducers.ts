import { AuthStoreModel } from '../models/authStoreModel';
import { authReducer } from './auth/auth.reducer';

export const sharedReducers = {
  auth: authReducer,
};

export interface SharedState {
  auth: AuthStoreModel;
}
