import React from 'react';
import { connect } from 'react-redux';

import Confirm from '../bootstrap/Confirm';
import { deleteEvent } from '../../actions';
import { getTimeFromDate } from '../../services/helpers';

import './EventItem.sass';

class EventItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteModal: false
    };
  }

  renderDeleteModal = () => {
    return this.state.showDeleteModal ? (
      <Confirm
        title="Delete event"
        message="Sure you want to delete this event?"
        handleConfirm={this.handleDeleteEvent}
        handleReject={this.hideDeleteModal}
        show={true}
      />
    ) : (
      ''
    );
  };

  showDeleteModal = () => {
    this.setState({
      showDeleteModal: true
    });
  };

  hideDeleteModal = () => {
    this.setState({
      showDeleteModal: false
    });
  };

  handleDeleteEvent = () => {
    this.props.deleteEvent(this.props.event.id, this.props.token);
  };
  render() {
    return (
      <div key={this.props.event.id} className="CalendarApp__event">
        <div className="CalendarApp__event__info">
          <p className="CalendarApp__event__time">
            <span className="icon-clock" />
            {getTimeFromDate(this.props.event.event_time)}
          </p>
          <h4>{this.props.event.title}</h4>
          <p className="CalendarApp__event__location">
            <span className="icon-location" />
            {this.props.event.location}
          </p>
          <p>{this.props.event.description}</p>
        </div>
        <div className="CalendarApp__event__actions">
          <span className="icon-trash" onClick={this.showDeleteModal} />
        </div>
        {this.renderDeleteModal()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { token: state.auth.token };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteEvent: (id, token) => dispatch(deleteEvent(id, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventItem);
