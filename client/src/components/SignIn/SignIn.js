import {
  AUTHORIZATION_REQUESTED,
  AUTHORIZATION_SUCCEEDED,
  AUTHORIZATION_FAILED
} from '../../actions';

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { authorizeUser } from '../../actions';

import './SignIn.sass';
import Loader from '../Loader/Loader';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    //Just done automatically, here should be a login page that would make the call and manage the responses
    this.props.authorizeUser('marlon@test.com', 'test');
  }

  renderAuthStatus() {
    switch (this.props.status) {
      case AUTHORIZATION_REQUESTED:
        return <Loader />;
      case AUTHORIZATION_SUCCEEDED:
        return <Redirect to="/calendar" />;
      case AUTHORIZATION_FAILED:
        return <span className="CalendarApp__error">Log in failed.</span>;
      default:
        return <span />;
    }
  }

  render() {
    return (
      <div className="CalendarApp__sign-in">{this.renderAuthStatus()}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    status: state.auth.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authorizeUser: (user, password) => dispatch(authorizeUser(user, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
