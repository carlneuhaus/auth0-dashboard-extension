import React, { Component } from 'react';

export default (props) => (
  <header className='site-header dashboard-header'>
    <nav className='navbar navbar-default' role='navigation'>
      <div className='container'>
        <div className='navbar-header'>
          <h1 className='navbar-brand'>
            <a href='http://manage.auth0.com/'><span>Auth0</span></a>
          </h1>
        </div>
        <div id='navbar-collapse' className='collapse navbar-collapse'>
          <ul className='nav navbar-nav navbar-right'>
            <li><a target='_blank' href='https://auth0.com/support'>Help & Support</a></li>
            <li><a target='_blank' href='https://auth0.com/docs'>Documentation</a></li>
            <li className='dropdown'>
              <span className='btn-dro btn-username' role='button' data-toggle='dropdown' data-target='#'>
                <img className='picture avatar' style={{ marginTop: "4px" }} src='https://secure.gravatar.com/avatar/a12075a065d2c41ac447dcffc1398d43?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fro.png'/>
                <span className='username-text truncate' style={{ marginTop: "4px" }}>Username</span>
                <i className='icon-budicon-460' style={{ top: "-4px" }}></i>
              </span>
              <ul className='dropdown-menu animated' role='menu' aria-labelledby='dLabel'>
                <li role='presentation'>
                  <a role='menuitem' tabIndex='-1' href='#/account'>Account Settings</a>
                </li>
                <li className='divider'></li>
                <li role='presentation'>
                  <a role='menuitem' tabIndex='-1' href='#/account'>New Account</a>
                </li>
                <li className='divider'></li>
                <li role='presentation'>
                  <a role='menuitem' tabIndex='-1' href='#/account'>Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
