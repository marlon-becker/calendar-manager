import { combineReducers } from 'redux';

import uiReducer from './ui.reducer';
import eventReducer from './event.reducer';
import calendarReducer from './calendar.reducer';
import authReducer from './auth.reducer';

export default combineReducers({
  events: eventReducer,
  calendar: calendarReducer,
  ui: uiReducer,
  auth: authReducer
});
