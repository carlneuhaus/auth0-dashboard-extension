import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SiteHeader from '../SiteHeader';

import MetricSelector from '../MetricSelector';
import MetricContent from '../MetricContent';

var styles = require('./styles.css');

const DashboardHeader = (props) => (
  <div className='row'>
    <div className='col-xs-12 content-header'>
      <h2>{props.title}</h2>
    </div>
  </div>
);

const DashboardPage = (props) => (
  <div className='container'>
    <div className='row'>
      <section className='content-page current'>
        {props.children}
      </section>
    </div>
  </div>
);

export default class AppRoot extends Component {
  render() {
    return (
      <div className={styles['app-root']}>
        <SiteHeader/>
        <DashboardPage>
          <DashboardHeader
            title="Auth0 Analytics" />
            <div className="row">
              <div className="col-xs-3">
                <MetricSelector/>
              </div>
              <div className="col-xs-9">
                <MetricContent
                  title="Indentity Providers"
                  />
              </div>
            </div>
        </DashboardPage>
      </div>
    );
  }
}
