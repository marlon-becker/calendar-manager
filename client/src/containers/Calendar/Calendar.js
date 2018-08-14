import {
  setCurrentMonth,
  setCurrentDate,
  showSidebar,
  fetchEventData
} from '../../actions';

import React from 'react';
import dateFns from 'date-fns';
import { connect } from 'react-redux';
import { getDateKey } from '../../services/helpers';
import CalendarCell from '../../components/CalendarCell/CalendarCell';
import CalendarHeader from '../../components/CalendarHeader/CalendarHeader';
import CalendarWeekDays from '../../components/CalendarWeekDays/CalendarWeekDays';

import './Calendar.sass';

class Calendar extends React.Component {
  componentDidMount = () => {
    this.loadEventsData();
  };

  loadEventsData = () => {
    this.props.fetchEventData(this.props.token);
  };

  getDayEvents(day) {
    if (this.props.events.status === 'FETCHED') {
      if (Array.isArray(this.props.events.data[getDateKey(new Date(day))])) {
        return this.props.events.data[getDateKey(new Date(day))];
      }
    }
    return [];
  }

  renderCells() {
    const monthStart = dateFns.startOfMonth(this.props.currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const rows = [];

    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const events = this.getDayEvents(day);
        days.push(
          <CalendarCell
            key={i}
            events={events}
            day={day}
            month={monthStart}
            selectedDate={this.props.selectedDate}
            handleDateClick={this.onDateClick}
            monthStart={monthStart}
          />
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.props.showSidebar();
    this.props.setCurrentDate(day);
  };

  nextMonth = () => {
    this.props.setCurrentMonth(dateFns.addMonths(this.props.currentMonth, 1));
  };

  prevMonth = () => {
    this.props.setCurrentMonth(dateFns.subMonths(this.props.currentMonth, 1));
  };

  render() {
    return (
      <div className="calendar">
        <CalendarHeader
          handlePrevMonth={this.prevMonth}
          handleNextMonth={this.nextMonth}
          currentMonth={this.props.currentMonth}
        />
        <CalendarWeekDays currentMonth={this.props.currentMonth} />
        {this.renderCells()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    events: state.events.events,
    currentMonth: state.calendar.currentMonth,
    selectedDate: state.calendar.selectedDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showSidebar: () => dispatch(showSidebar()),
    setCurrentMonth: date => dispatch(setCurrentMonth(date)),
    setCurrentDate: date => dispatch(setCurrentDate(date)),
    fetchEventData: token => dispatch(fetchEventData(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
