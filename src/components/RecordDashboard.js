import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from './table';
import Task from './task';
import { getRandomDigits } from '../utilities/randomDigits';
import { TableColumns } from './tableColumns';

class RecordDashboard extends Component {
  renderRecordedTasks(tasks) {
    return tasks.map(item => (
      <Task
        key={Date.now() + getRandomDigits()}
        ID={item.ID}
        recordingState={true}
        actionType={item.actionType}
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
        <TableColumns />
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
