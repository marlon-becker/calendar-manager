import {
  AUTHORIZATION_REQUESTED,
  AUTHORIZATION_FAILED,
  AUTHORIZATION_SUCCEEDED
} from '../actions';

export const initialAuthState = {
  user: '',
  status: '',
  token: ''
};

function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case AUTHORIZATION_REQUESTED:
      state = {
        ...state,
        user: '',
        token: '',
        status: AUTHORIZATION_REQUESTED
      };
      return state;
    case AUTHORIZATION_FAILED:
      state = {
        ...state,
        user: '',
        token: '',
        status: AUTHORIZATION_FAILED
      };
      return state;
    case AUTHORIZATION_SUCCEEDED:
      state = {
        ...state,
        user: action.user,
        token: action.token,
        status: AUTHORIZATION_SUCCEEDED
      };
      return state;
    default:
      return state;
  }
}

export default authReducer;
