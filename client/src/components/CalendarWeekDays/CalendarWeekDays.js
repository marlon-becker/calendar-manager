import React from 'react';
import dateFns from 'date-fns';

import './CalendarWeekDays.sass';

class CalendarWeekDays extends React.Component {
  render() {
    const dateFormat = 'dddd';
    const days = [];

    let startDate = dateFns.startOfWeek(this.props.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="col col-center">
          {dateFns.format(startDate, dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  }
}

export default CalendarWeekDays;
