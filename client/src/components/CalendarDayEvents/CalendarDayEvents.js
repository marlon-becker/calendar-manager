import { FETCHED, FETCHING, FETCH_FAILED } from '../../constants';

import React from 'react';
import Loader from '../Loader/Loader';

import './CalendarDayEvents.sass';

class CalendarDayEvents extends React.Component {
  render() {
    switch (this.props.eventStatus) {
      case FETCHING:
        return <Loader />;
      case FETCHED:
        return (
          <div className="menu">
            <span className="">
              <Link to="/">Calendar</Link>
            </span>

            <span className="">
              <Link to="/events">View all events</Link>
            </span>
          </div>
        );
      case FETCH_FAILED:
        return <span className="">Failed loading data. Try again</span>;
      default:
        return <span />;
    }
  }
}

export default CalendarDayEvents;
