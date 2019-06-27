import React, { Component } from 'react';
import { Table } from './table';

class RecordDashboard extends Component {
  render() {
    return (
      <Table>
        <th scope="col">Action</th>
        <th scope="col">Name</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
      </Table>
    );
  }
}

export default RecordDashboard;
