import React from 'react';

import './Sidebar.sass';

class SideBar extends React.Component {
  render() {
    return (
      <aside className="CalendarApp__sidebar">
        <div className="btn--close" onClick={this.props.handleCloseClick}>
          <span className="icon-close" />
        </div>
        {this.props.children}
      </aside>
    );
  }
}

export default SideBar;
