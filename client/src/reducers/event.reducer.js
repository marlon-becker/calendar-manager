import { FETCHED, FETCHING, FETCH_FAILED } from '../constants';

import { getDateKey } from '../services/helpers';

import {
  EVENT_FETCH_REQUESTED,
  EVENT_FETCH_SUCCEEDED,
  EVENT_FETCH_FAILED
} from '../actions';

export const initialEventState = {
  events: { status: '' }
};

function eventReducer(state = initialEventState, action) {
  switch (action.type) {
    case EVENT_FETCH_REQUESTED:
      state = { ...state };
      state.events = { ...state.events };
      state.events = {
        status: FETCHING,
        date: Date.now(),
        data: {}
      };
      return state;
    case EVENT_FETCH_SUCCEEDED:
      state = { ...state };
      state.events = { ...state.events };
      const data = {};
      for (const event in action.data.data) {
        const dateKey = getDateKey(
          new Date(action.data.data[event].event_time)
        );
        if (!Array.isArray(data[dateKey])) data[dateKey] = [];
        data[dateKey].push(action.data.data[event]);
      }
      state.events = {
        status: FETCHED,
        date: Date.now(),
        data
      };
      return state;
    case EVENT_FETCH_FAILED:
      state = { ...state };
      state.events = { ...state.events };
      state.events = {
        status: FETCH_FAILED,
        date: Date.now(),
        data: {}
      };
      return state;
    default:
      return state;
  }
}

export default eventReducer;
