import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import {
  fetchEventData,
  closeSidebar,
  closeCreateEvent,
  setCurrentDate
} from './actions';

import SignIn from './components/SignIn/SignIn';
import Calendar from './containers/Calendar/Calendar';
import EventsList from './containers/EventsList/EventsList';
import CalendarActions from './components/CalendarActions/CalendarActions';
import CalendarSidebar from './components/CalendarSidebar/CalendarSidebar';
import CalendarCreateEvent from './components/CalendarCreateEvent/CalendarCreateEvent';
import { AUTHORIZATION_SUCCEEDED } from './actions';

import './App.sass';

// Route configuration
const routes = [
  {
    path: '/events',
    component: EventsList
  },
  {
    path: '/calendar',
    component: Calendar
  },
  {
    path: '*',
    component: <Redirect to="/" />
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => {
      return route.auth === AUTHORIZATION_SUCCEEDED ? (
        <route.component {...props} routes={route.routes} />
      ) : (
        <Redirect to="/" />
      );
    }}
  />
);

class CalendarApp extends Component {
  handleCloseCalendar = e => {
    this.props.closeSidebar();
    this.props.setCurrentDate('');
  };

  render() {
    return (
      <Router>
        <div className="CalendarApp">
          <header className="CalendarApp__header">
            <h1 className="CalendarApp__title">
              <span className="icon-calendar" />Calendar App
            </h1>
            <div className="CalendarApp__actions">
              <CalendarActions eventStatus={this.props.status} />
            </div>
          </header>
          <main
            className={`${
              this.props.showSidebar === true
                ? 'CalendarApp__main--hidden'
                : 'CalendarApp__main'
            }`}
          >
            <Switch>
              <Route exact path="/" component={SignIn} />
              {routes.map((route, i) => (
                <RouteWithSubRoutes
                  key={i}
                  auth={this.props.authStatus}
                  {...route}
                />
              ))}
            </Switch>
          </main>
          <CalendarSidebar
            onClick={this.handleSidebarClick}
            eventStatus={this.props.status}
            handleCloseClick={this.handleCloseCalendar}
            selectedDate={this.props.selectedDate}
          />
          <CalendarCreateEvent
            showSidebar={this.props.showCreateEvent}
            handleCloseClick={this.props.closeCreateEvent}
            selectedDate={this.props.selectedDate}
          />
          <footer className="CalendarApp__footer">
            Calendar app by{' '}
            <a href="https://github.com/marlonbs">Marlon Becker</a> for Quipu
            test
          </footer>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedDate: state.calendar.selectedDate,
    status: state.events.events.status,
    showSidebar: state.ui.showSidebar,
    showCreateEvent: state.ui.showCreateEvent,
    authStatus: state.auth.status,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeCreateEvent: () => dispatch(closeCreateEvent()),
    closeSidebar: () => dispatch(closeSidebar()),
    fetchEventData: token => dispatch(fetchEventData(token)),
    setCurrentDate: date => dispatch(setCurrentDate(date))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarApp);
