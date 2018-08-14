import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchEventData,
  putEvent,
  deleteEvent,
  authorizeUser
} from './services/event.api';

// worker Saga: will be fired on FETCH_REQUESTED actions
function* fetchCalendarData(action) {
  try {
    const eventData = yield call(fetchEventData, action.token);
    yield put({
      type: 'EVENT_FETCH_SUCCEEDED',
      data: eventData,
      token: action.token
    });
  } catch (e) {
    yield put({ type: 'EVENT_FETCH_FAILED', message: e.message });
  }
}

// worker Saga: will be fired on CREATE_REQUESTS actions
function* createEvent(action) {
  try {
    const eventData = yield call(putEvent, action.data, action.token);
    yield put({
      type: 'EVENT_CREATE_SUCCEEDED',
      data: eventData
    });
    yield put({
      type: 'EVENT_FETCH_REQUESTED',
      token: action.token
    });
  } catch (e) {
    yield put({ type: 'EVENT_CREATE_FAILED', message: e.message });
  }
}

// worker Saga: will be fired on CREATE_REQUESTS actions
function* deleteSingleEvent(action) {
  try {
    yield call(deleteEvent, action.id, action.token);
    yield put({
      type: 'EVENT_DELETE_SUCCEEDED',
      id: action.id
    });
    yield put({
      type: 'EVENT_FETCH_REQUESTED',
      token: action.token
    });
  } catch (e) {
    yield put({ type: 'EVENT_DELETE_FAILED', message: e.message });
  }
}

// worker Saga: will be fired on CREATE_REQUESTS actions
function* authorizeUserEvent(action) {
  try {
    const eventData = yield call(authorizeUser, action.user, action.password);
    yield put({
      type: 'AUTHORIZATION_SUCCEEDED',
      id: action.user,
      token: eventData.jwt
    });
  } catch (e) {
    yield put({ type: 'EVENT_DELETE_FAILED', message: e.message });
  }
}

/*
  Starts fetchCalendarData on each dispatched `FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery('EVENT_FETCH_REQUESTED', fetchCalendarData);
  yield takeEvery('EVENT_CREATE_REQUESTED', createEvent);
  yield takeEvery('EVENT_DELETE_REQUESTED', deleteSingleEvent);
  yield takeEvery('AUTHORIZATION_REQUESTED', authorizeUserEvent);
}

export default mySaga;
