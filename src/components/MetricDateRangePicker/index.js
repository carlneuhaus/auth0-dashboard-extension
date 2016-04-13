import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';

export default class MetricDateRangePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: props.startDate,
      endDate: props.endDate
    }
  }

  handleEvent(event, picker) {
    if (event.type === 'apply') {
      // We've received a new date from the date picker
      this.setState({
        startDate: picker.startDate,
        endDate: picker.endDate
      });
      if (this.props.onDateRangeChange) {
        this.props.onDateRangeChange(picker.startDate, picker.endDate);
      }
    }
  }

  render() {
    var ranges = {
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'Last 30 Days': [moment().subtract(89, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    };
    return <div className="text-right">
        <DateRangePicker
          onEvent={this.handleEvent.bind(this)}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          opens="left"
          ranges={ranges}
          alwaysShowCalendars={false}
          >
          <div className={"btn btn-sm date-picker-launcher"}>
            <i className="icon-budicon-615"></i>&nbsp;
            {moment(this.state.startDate).format('MMM Do YYYY')} -
            {moment(this.state.endDate).format('MMM Do YYYY')}
            <b className="caret"></b>
          </div>
        </DateRangePicker>
    </div>
  }
}
