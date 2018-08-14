import mockNewDate from './tests/mocks/mockNewDate';

import eventReducer, { initialEventState } from './reducers/event.reducer';
import calendarReducer, {
  initialCalendarState
} from './reducers/calendar.reducer';
import uiReducer, { initialUIState } from './reducers/ui.reducer';

import { FETCHING, FETCH_FAILED } from './constants';
import {
  EVENT_FETCH_REQUESTED,
  EVENT_FETCH_FAILED,
  SET_CURRENT_MONTH,
  SET_CURRENT_DATE,
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
  SHOW_CREATE_EVENT,
  HIDE_CREATE_EVENT
} from './actions';

import expect from 'expect';

const now = Date.now();
Date.now = jest.genMockFunction().mockReturnValue(now);

/* Testing for Event Reducers */
describe('event reducer', () => {
  it('should return the initial state', () => {
    expect(eventReducer(undefined, {})).toEqual(initialEventState);
  });

  it('should handle fetch events data request', () => {
    expect(
      eventReducer(undefined, {
        type: EVENT_FETCH_REQUESTED
      })
    ).toEqual({
      events: {
        status: FETCHING,
        date: Date.now(),
        data: {}
      }
    });
  });

  it('should handle fetch failed events data', () => {
    expect(
      eventReducer(undefined, {
        type: EVENT_FETCH_FAILED
      })
    ).toEqual({
      events: {
        status: FETCH_FAILED,
        date: Date.now(),
        data: {}
      }
    });
  });
});

/* Testing for Calendar Reducers */
describe('calendar reducer', () => {
  it('should return the initial state', () => {
    expect(calendarReducer(undefined, {})).toEqual(initialCalendarState);
  });

  it('should handle change of current date', () => {
    expect(
      calendarReducer(undefined, {
        type: SET_CURRENT_DATE,
        date: new Date()
      })
    ).toEqual({
      currentMonth: new Date(),
      selectedDate: new Date()
    });
  });

  it('should handle change of month', () => {
    expect(
      calendarReducer(undefined, {
        type: SET_CURRENT_MONTH,
        date: new Date()
      })
    ).toEqual({
      currentMonth: new Date(),
      selectedDate: ''
    });
  });
});

/* Testing for UI Reducers */
describe('ui reducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(initialUIState);
  });

  it('should handle show of the sidebar', () => {
    expect(
      uiReducer(undefined, {
        type: SHOW_SIDEBAR
      })
    ).toEqual({
      ...initialUIState,
      showSidebar: true
    });
  });

  it('should handle hiding of the sidebar', () => {
    expect(
      uiReducer(undefined, {
        type: HIDE_SIDEBAR
      })
    ).toEqual({
      ...initialUIState,
      showSidebar: false
    });
  });

  it('should handle show of create event form', () => {
    expect(
      uiReducer(undefined, {
        type: SHOW_CREATE_EVENT
      })
    ).toEqual({
      ...initialUIState,
      showCreateEvent: true
    });
  });

  it('should handle hiding of create event form', () => {
    expect(
      uiReducer(undefined, {
        type: HIDE_CREATE_EVENT
      })
    ).toEqual({
      ...initialUIState,
      showCreateEvent: false
    });
  });
});
