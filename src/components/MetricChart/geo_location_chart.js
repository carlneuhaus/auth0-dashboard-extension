
import React, { Component } from 'react';
import _ from 'lodash';

import GoogleMap from 'google-map-react';

export default class GeoLocationChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSet: props.dataSet,

      center : {lat: 0, lng: 0},
      zoom : 1
    };
  }

  render() {

    return ( 
      <div className="gmap">
        <GoogleMap 
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}>
        </GoogleMap>
      </div>
    );
  }

};
