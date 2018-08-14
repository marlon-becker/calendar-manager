import React from 'react';
import dateFns from 'date-fns';
import './CalendarCell.sass';

const dateFormat = 'D';

class CalendarCell extends React.Component {
  render() {
    const formattedDate = dateFns.format(this.props.day, dateFormat);
    const cloneDay = this.props.day;

    return (
      <div
        className={`col cell ${
          !dateFns.isSameMonth(this.props.day, this.props.monthStart)
            ? 'disabled'
            : dateFns.isSameDay(this.props.day, this.props.selectedDate)
              ? 'selected'
              : ''
        } ${this.props.events.length > 0 ? 'event' : ''}`}
        key={this.props.day}
        onClick={() => this.props.handleDateClick(dateFns.parse(cloneDay))}
      >
        <span className="number">{formattedDate}</span>
        <span className="bg">{formattedDate}</span>
      </div>
    );
  }
}

export default CalendarCell;
