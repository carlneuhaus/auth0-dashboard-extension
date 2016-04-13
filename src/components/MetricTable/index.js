import React, { Component } from 'react';

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
    this.props.dataSet.users.forEach(function(user){
      rows.push(<tr key={user}><td>{user}</td></tr>);
    });

    return (<div>
            <div className={styles.summary}>
              <span>On detail:</span>
            </div>
            <div className={styles.grid}>
              <table>
                <thead>
                  <tr>
                    <th>Users over AVG</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </table>
            </div>
          </div>);
  }

};
