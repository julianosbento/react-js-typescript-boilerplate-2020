import { action } from 'typesafe-actions';
import { LoginTypes, Login } from './types';

// Login

export const loadRequest = () => action(LoginTypes.LOAD_REQUEST);

export const loadSuccess = (data: Login) =>
  action(LoginTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(LoginTypes.LOAD_FAILURE);
