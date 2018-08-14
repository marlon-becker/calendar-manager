import {
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
  SHOW_CREATE_EVENT,
  HIDE_CREATE_EVENT,
  EVENT_CREATE_SUCCEEDED
} from '../actions';

export const initialUIState = {
  showSidebar: false,
  showCreateEvent: false
};

function uiReducer(state = initialUIState, action) {
  switch (action.type) {
    case SHOW_SIDEBAR:
      state = {
        ...state,
        showSidebar: true
      };
      return state;
    case HIDE_SIDEBAR:
      state = {
        ...state,
        showSidebar: false
      };
      return state;
    case SHOW_CREATE_EVENT:
      state = {
        ...state,
        showCreateEvent: true
      };
      return state;
    case HIDE_CREATE_EVENT:
      state = {
        ...state,
        showCreateEvent: false
      };
      return state;
    case EVENT_CREATE_SUCCEEDED:
      return {
        ...state,
        showCreateEvent: false
      };
    default:
      return state;
  }
}

export default uiReducer;
