import React, { Component } from 'react';

const styles = require('./styles.css');

export default (props) => (
  <div>
    <div className={styles.summary}>
      <span>On detail:</span>
    </div>
    <div className={styles.grid}>
      <table>
        <thead>
          <tr>
            <th>Superheroes</th>
            <th>Superpower</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Superman</td>
            <td>Flight</td>
          </tr>
          <tr>
            <td>Batman</td>
            <td>Utility Belt</td>
          </tr>
          <tr>
            <td>@german</td>
            <td><em>Secret</em></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
