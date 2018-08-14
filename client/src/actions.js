//TODO split actions in different files (events, calendar, ui...)
//Events actions
export const EVENT_FETCH_REQUESTED = 'EVENT_FETCH_REQUESTED';
export const EVENT_FETCH_FAILED = 'EVENT_FETCH_FAILED';
export const EVENT_FETCH_SUCCEEDED = 'EVENT_FETCH_SUCCEEDED';
export const EVENT_CREATE_REQUESTED = 'EVENT_CREATE_REQUESTED';
export const EVENT_CREATE_FAILED = 'EVENT_CREATE_FAILED';
export const EVENT_CREATE_SUCCEEDED = 'EVENT_CREATE_SUCCEEDED';
export const EVENT_DELETE_REQUESTED = 'EVENT_DELETE_REQUESTED';
export const EVENT_DELETE_FAILED = 'EVENT_DELETE_FAILED';
export const EVENT_DELETE_SUCCEEDED = 'EVENT_DELETE_SUCCEEDED';

export const fetchEventData = token => ({
  type: EVENT_FETCH_REQUESTED,
  token
});

export const fetchEventDataFailed = () => ({
  type: EVENT_FETCH_FAILED
});

export const fetchEventDataSucceded = () => ({
  type: EVENT_FETCH_SUCCEEDED
});

export const createEvent = (data, token) => ({
  type: EVENT_CREATE_REQUESTED,
  data,
  token
});

export const createEventFailed = () => ({
  type: EVENT_CREATE_FAILED
});

export const createEventSucceded = () => ({
  type: EVENT_CREATE_SUCCEEDED
});

export const deleteEvent = (id, token) => ({
  type: EVENT_DELETE_REQUESTED,
  id,
  token
});

export const deleteEventFailed = () => ({
  type: EVENT_DELETE_FAILED
});

export const deleteEventSucceded = () => ({
  type: EVENT_DELETE_SUCCEEDED
});

//Calendar actions
export const SET_CURRENT_MONTH = 'SET_CURRENT_MONTH';
export const SET_CURRENT_DATE = 'SET_CURRENT_DATE';

export const setCurrentMonth = date => ({
  type: SET_CURRENT_MONTH,
  date
});

export const setCurrentDate = date => ({
  type: SET_CURRENT_DATE,
  date
});

//UI actions
export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
export const HIDE_SIDEBAR = 'HIDE_SIDEBAR';
export const SHOW_CREATE_EVENT = 'SHOW_CREATE_EVENT';
export const HIDE_CREATE_EVENT = 'HIDE_CREATE_EVENT';

export const showSidebar = () => ({
  type: SHOW_SIDEBAR
});

export const closeSidebar = () => ({
  type: HIDE_SIDEBAR
});

export const showCreateEvent = () => ({
  type: SHOW_CREATE_EVENT
});

export const closeCreateEvent = () => ({
  type: HIDE_CREATE_EVENT
});

//Authorization actions
export const AUTHORIZATION_REQUESTED = 'AUTHORIZATION_REQUESTED';
export const AUTHORIZATION_FAILED = 'AUTHORIZATION_FAILED';
export const AUTHORIZATION_SUCCEEDED = 'AUTHORIZATION_SUCCEEDED';

export const authorizeUser = (user, password) => ({
  type: AUTHORIZATION_REQUESTED,
  user,
  password
});

export const authorizeUserFailed = () => ({
  type: AUTHORIZATION_FAILED
});

export const authorizeUserSucceeded = () => ({
  type: AUTHORIZATION_SUCCEEDED
});
