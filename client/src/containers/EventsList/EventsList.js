import { FETCHED, FETCHING, FETCH_FAILED } from '../../constants';

import { connect } from 'react-redux';
import React, { Component } from 'react';

import Loader from '../../components/Loader/Loader';
import EventItem from '../../components/EventItem/EventItem';
import { getDateFormatFromKey, getFormatDate } from '../../services/helpers';

import './EventsList.sass';

class EventsList extends Component {
  renderEvents() {
    const events = [];
    for (const dateKey in this.props.events.data) {
      events.push(
        <div key={dateKey} className="events__list">
          <h3>{getFormatDate(new Date(getDateFormatFromKey(dateKey)))}</h3>
          {this.props.events.data[dateKey].map((eventData, key) => (
            <EventItem key={eventData.id} event={eventData} />
          ))}
        </div>
      );
    }
    return events;
  }

  render() {
    switch (this.props.status) {
      case FETCHING:
        return <Loader />;
      case FETCHED:
        return <div className="events">{this.renderEvents()}</div>;
      case FETCH_FAILED:
        return <span className="">Failed loading data. Try again</span>;
      default:
        return <span />;
    }
  }
}

const mapStateToProps = state => {
  return {
    status: state.events.events.status,
    events: state.events.events
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsList);
