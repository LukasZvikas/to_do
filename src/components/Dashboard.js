import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from './task';
import TaskForm from './TaskForm';
import RecordPanel from './RecordPanel';
import { Table } from './table';
import { getRandomDigits } from '../utilities/randomDigits';
import { Button } from './button';
import { TableColumns } from './tableColumns';

class Dashboard extends Component {
  state = { showForm: false, isUpdate: false, updatedItemID: null };
  renderTasks(tasks) {
    return tasks.map(item => (
      <Task
        key={Date.now() + getRandomDigits()}
        ID={item.ID}
        name={item.name}
        description={item.description}
        creationDate={item.creationDate}
        showForm={() => this.changeShowFormState(true, item.ID)}
      />
    ));
  }

  changeUpdateState(ID = null) {
    this.setState({ isUpdate: !this.state.isUpdate, updatedItemID: ID });
  }

  changeShowFormState(isUpdate = false, ID = null) {
    if (isUpdate) {
      this.changeUpdateState(ID);
    }
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  }

  render() {
    const { showForm, isUpdate, updatedItemID } = this.state;
    const { tasks, isPlaying, tasksToBePlayed } = this.props;
    return (
      <Fragment>
        <Table rows={this.renderTasks(isPlaying ? tasksToBePlayed : tasks)}>
          <TableColumns />
        </Table>
        {showForm ? (
          <TaskForm
            isUpdate={isUpdate}
            ID={updatedItemID}
            closeForm={() => {
              this.changeShowFormState();
              isUpdate && this.changeUpdateState();
            }}
          />
        ) : null}

        <Button name="Add Task" color="btn-primary" onClick={() => this.changeShowFormState()} />
        <RecordPanel />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ toDos: { tasks, recordedTasks, tasksToBePlayed, isPlaying } }) => ({
  tasks,
  recordedTasks,
  tasksToBePlayed,
  isPlaying
});

Dashboard.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      creationDate: PropTypes.string.isRequired
    })
  ),
  tas: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      creationDate: PropTypes.string.isRequired
    })
  )
};

Dashboard.defaultProps = {
  tasks: [],
  tasksToBePlayed: []
};

export default connect(
  mapStateToProps,
  null
)(Dashboard);
