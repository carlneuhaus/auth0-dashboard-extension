import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MetricMenuItem from '../MetricMenuItem';
import SiteHeader from '../SiteHeader';

var styles = require('./styles.css');

const DashboardHeader = (props) => (
  <div className='row'>
    <div className='col-xs-12 content-header'>
      <h1>{props.title}</h1>
      <div className='explanation'>
        <p className='explainer-text-content'>
          {props.explanation}
        </p>
      </div>
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
            title="Metrics"
            explanation="kablooie" />
            abcde
        </DashboardPage>
      </div>
    );
  }
}
