/**
 * Action types
 */
export enum LoginTypes {
  LOAD_REQUEST = '@login/LOAD_REQUEST',
  LOAD_SUCCCES = '@login/LOAD_SUCCCES',
  LOAD_FAILURE = '@login/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Login {
  username: string;
}

/**
 * State type
 */
export interface LoginState {
  readonly data: Login;
  readonly loading: boolean;
  readonly error: boolean;
}
