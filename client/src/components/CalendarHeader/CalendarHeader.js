import React from 'react';
import dateFns from 'date-fns';

import './CalendarHeader.sass';

class CalendarHeader extends React.Component {
  render() {
    const dateFormat = 'MMMM YYYY';
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.props.handlePrevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.props.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.props.handleNextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }
}

export default CalendarHeader;
