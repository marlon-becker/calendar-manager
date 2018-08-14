import React, { Component } from 'react';

import './Loader.sass';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: props.position
        ? `Loader--${props.position}`
        : `Loader--center-left`
    };
  }

  render() {
    return <div className={this.state.class} />;
  }
}

export default Loader;
