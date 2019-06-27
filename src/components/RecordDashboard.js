import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from './table';
import Task from './task';

class RecordDashboard extends Component {
  renderRecordedTasks(tasks) {
    return tasks.map(item => (
      <Task
        recordingState={true}
        actionType={item.actionType}
        ID={item.ID}
        name={item.name}
        description={item.description}
        creationDate={item.creationDate}
      />
    ));
  }

  render() {
    const { recordedTasks } = this.props;
    return (
      <Table rows={this.renderRecordedTasks(recordedTasks)}>
        <th scope="col">Action</th>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Creation Date</th>
      </Table>
    );
  }
}

const mapStateToProps = ({ toDos: { recordedTasks } }) => ({
  recordedTasks
});

RecordDashboard.propTypes = {
  recordedTasks: PropTypes.arrayOf(PropTypes.object)
};

RecordDashboard.defaultProps = {
  recordedTasks: []
};

export default connect(
  mapStateToProps,
  null
)(RecordDashboard);
