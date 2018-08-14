import { FETCHED, FETCHING, FETCH_FAILED } from '../../constants';

import React from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../Loader/Loader';

import './CalendarActions.sass';

class CalendarActions extends React.Component {
  render() {
    switch (this.props.eventStatus) {
      case FETCHING:
        return <Loader />;
      case FETCHED:
        return (
          <div className="CalendarApp__menu">
            <NavLink
              to="/calendar"
              className="btn"
              activeClassName="btn--active"
            >
              Calendar
            </NavLink>
            <NavLink to="/events" className="btn" activeClassName="btn--active">
              All events
            </NavLink>
          </div>
        );
      case FETCH_FAILED:
        return <span className="">Failed loading data. Try again</span>;
      default:
        return <span />;
    }
  }
}

export default CalendarActions;
