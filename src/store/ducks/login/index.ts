import { Reducer } from 'redux';
import { LoginState, LoginTypes } from './types';

const INITIAL_STATE: LoginState = {
  data: {
    username: '',
  },
  error: false,
  loading: false,
};

const reducer: Reducer<LoginState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case LoginTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case LoginTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {
          username: '',
        },
      };
    default:
      return state;
  }
};

export default reducer;
