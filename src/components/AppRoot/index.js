import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SiteHeader from '../SiteHeader';
import DashboardActiveContent from '../DashboardActiveContent';

var styles = require('./styles.css');

const DashboardHeader = (props) => (
  <div className='row'>
    <div className='col-xs-12 content-header'>
      <h3>{props.title}</h3>
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
          <DashboardActiveContent />
        </DashboardPage>
      </div>
    );
  }
}
