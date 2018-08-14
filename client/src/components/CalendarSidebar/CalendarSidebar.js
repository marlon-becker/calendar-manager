import { FETCHED, FETCHING, FETCH_FAILED } from '../../constants';

import React from 'react';
import { connect } from 'react-redux';

import { showCreateEvent } from '../../actions';
import { getDateKey, getFormatDate } from '../../services/helpers';

import Loader from '../Loader/Loader';
import Sidebar from '../Sidebar/Sidebar';
import EventItem from '../EventItem/EventItem';

import './CalendarSidebar.sass';

class CalendarSidebar extends React.Component {
  renderEvents() {
    const events = this.props.events.data[
      getDateKey(new Date(this.props.selectedDate))
    ];

    if (Array.isArray(events)) {
      switch (this.props.eventStatus) {
        case FETCHING:
          return <Loader />;
        case FETCHED:
          return (
            <div className="menu">
              {events.map(eventData => {
                return <EventItem key={eventData.id} event={eventData} />;
              })}
            </div>
          );
        case FETCH_FAILED:
          return <span className="">Failed loading data.</span>;
        default:
          return <span />;
      }
    } else {
      return <div className="CalendarApp__msg">- No events found -</div>;
    }
  }

  render() {
    return this.props.showSidebar ? (
      <Sidebar handleCloseClick={this.props.handleCloseClick}>
        <h3>{getFormatDate(this.props.selectedDate)}</h3>
        <div className="CalendarApp__sidebar__events">
          {this.renderEvents()}
        </div>
        <div className="CalendarApp__sidebar__actions">
          <button onClick={this.props.showCreateEvent} className="btn">
            + Add event
          </button>
        </div>
      </Sidebar>
    ) : (
      ''
    );
  }
}

const mapStateToProps = state => {
  return {
    showSidebar: state.ui.showSidebar,
    events: state.events.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showCreateEvent: () => dispatch(showCreateEvent())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarSidebar);
