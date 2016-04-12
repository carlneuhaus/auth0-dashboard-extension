import React, { Component } from 'react';

const MenuItem = (props) => {
  var activeClass = props.isActive ? 'active' : '';
  return <a href="#" onClick={props.onClick} className={"list-group-item " + activeClass}>{props.name}</a>
}

export default class MetricSelector extends Component {
  render() {
    return (
      <ul className="list-group">
        <MenuItem name="Logins Per Day" isActive={true}/>
        <MenuItem name="Logins Per Signup"/>
        <MenuItem name="Geolocation"/>
        <MenuItem name="Identity Providers"/>
        <MenuItem name="Logs"/>
      </ul>
    )
  }
}
