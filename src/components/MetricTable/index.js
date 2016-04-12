import React, { Component } from 'react';

export default (props) => (
  <table className="table data-table">
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
);
