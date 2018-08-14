import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import TimePicker from 'rc-time-picker';

import { createEvent } from '../../actions';
import { getFormatDate } from '../../services/helpers';

import Sidebar from '../Sidebar/Sidebar';

import './CalendarCreateEvent.sass';
import './TimePicker.sass';

class CalendarCreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.resetState();
  }

  resetState = () => {
    this.setState({
      date: moment(),
      title: '',
      description: '',
      location: '',
      event_time: '',
      error: ''
    });
  };

  onChangeTime = date => {
    if (date) this.setState({ date });
  };

  onChangeText = event => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  onSubmit = event => {
    this.setState({ error: '' });
    if (event.keyCode === 13) {
      return this.handleSubmit();
    }
  };

  handleSubmit = () => {
    if (this.state.title.length <= 3) {
      this.setState({ error: 'Title is mandatory' });
      return false;
    }
    if (this.state.description.length <= 3) {
      this.setState({ error: 'Description is mandatory' });
      return false;
    }

    this.props.selectedDate.setHours(
      this.state.date.hours(),
      this.state.date.minutes()
    );

    this.props.createEvent(
      {
        title: this.state.title,
        description: this.state.description,
        location: this.state.location,
        event_time: this.props.selectedDate
      },
      this.props.token
    );
    this.resetState();
    return false;
  };

  renderError = () => {
    return this.state.error ? (
      <div className="CalendarApp__error">{this.state.error}</div>
    ) : (
      ''
    );
  };

  render() {
    return this.props.showCreateEvent ? (
      <Sidebar handleCloseClick={this.props.handleCloseClick}>
        <div className="CalendarApp__create-event__form">
          <h3>Add new event in {getFormatDate(this.props.selectedDate)}</h3>
          <div onKeyUp={this.onSubmit}>
            <div className="CalendarApp__create-event__form--field">
              <input
                type="text"
                name="title"
                placeholder="Create a title"
                onKeyUp={this.onChangeText}
              />
            </div>
            <div className="CalendarApp__create-event__form--field">
              <input
                type="text"
                name="description"
                placeholder="Create a description"
                onKeyUp={this.onChangeText}
              />
            </div>
            <div className="CalendarApp__create-event__form--field">
              <input
                type="text"
                name="location"
                placeholder="Add a location"
                onKeyUp={this.onChangeText}
              />
            </div>
            <div className="CalendarApp__create-event__form--field">
              <span className="icon-clock" />
              <TimePicker
                style={{ width: 100 }}
                showSecond={false}
                defaultValue={moment()}
                value={this.state.date}
                onChange={this.onChangeTime}
              />
            </div>
            {this.renderError()}
            <div className="CalendarApp__sidebar__actions">
              <button onClick={this.handleSubmit} className="btn">
                Create
              </button>
            </div>
          </div>
        </div>
      </Sidebar>
    ) : (
      ''
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    showCreateEvent: state.ui.showCreateEvent,
    events: state.events.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createEvent: (data, token) => dispatch(createEvent(data, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarCreateEvent);
