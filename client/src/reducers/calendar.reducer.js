import { SET_CURRENT_DATE, SET_CURRENT_MONTH } from '../actions';

export const initialCalendarState = {
  currentMonth: new Date(),
  selectedDate: ''
};

function calendarReducer(state = initialCalendarState, action) {
  switch (action.type) {
    case SET_CURRENT_MONTH:
      return {
        ...state,
        currentMonth: action.date
      };
    case SET_CURRENT_DATE:
      return {
        ...state,
        selectedDate: action.date
      };
    default:
      return state;
  }
}

export default calendarReducer;
