import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import moment from 'moment';

const styles = require('./styles.css');

export default class MetricTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: props.dataSet
    };
  }

  render() {
    if (!this.props.dataSet.users) {
      return (<div></div>);
    }
    var rows = [];
    var avg = this.props.dataSet.avg;

    this.props.dataSet.aggregations.forEach(function(day){
      day.buckets.forEach(function(bucket){
        if (bucket.count > avg) {
          rows.push(<tr><td>{moment(day.key).format('YYYY-MM-DD')}</td><td>{bucket.key}</td><td>{bucket.count}</td></tr>);
        }
      })
    })

    return (<div>
            <div className={styles.summary}>
              <span>{this.props.title || 'Metric Details'}</span>
              <span className={['pull-right', styles.exportButtonContainer].join(' ')}>
                <DropdownButton title="Export" bsStyle="link" bsSize="small" pullright>
                  <MenuItem eventKey="csv">CSV</MenuItem>
                  <MenuItem eventKey="excel">Excel</MenuItem>
                </DropdownButton>
              </span>
            </div>
            <div className={styles.grid}>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>User</th>
                    <th># Logins</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </table>
            </div>
          </div>);
  }

};
