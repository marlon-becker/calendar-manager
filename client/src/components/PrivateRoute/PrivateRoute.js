import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { AUTHORIZATION_SUCCEEDED } from '../actions';

class PrivateRoute extends Component {
  render() {
    return (
      <Route
        {...rest}
        render={props =>
          state.auth.status === AUTHORIZATION_SUCCEEDED ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/sign-in', state: { from: props.location } }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.auth.status
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
