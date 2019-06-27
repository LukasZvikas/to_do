import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Task } from './task';
import TaskForm from './TaskForm';
import RecordPanel from './RecordPanel';
import { Table } from './table';

class Dashboard extends Component {
  state = { showForm: false, isUpdate: false, updatedItemID: null };
  renderTasks(tasks) {
    return tasks.map(item => (
      <Task
        key={item.ID}
        ID={item.ID}
        name={item.name}
        description={item.description}
        creationDate={item.creationDate}
        showForm={() => this.changeShowFormState(true, item.ID)}
      />
    ));
  }

  changeUpdateState(ID) {
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
    const { tasks } = this.props;
    return (
      <Fragment>
        <Table rows={this.renderTasks(tasks)}>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Creation Date</th>
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
        <button onClick={() => this.changeShowFormState()} className="btn btn-primary">
          Add Task
        </button>
        <RecordPanel />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ toDos: { tasks } }) => ({
  tasks
});

Dashboard.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      creationDate: PropTypes.string.isRequired
    })
  )
};

Dashboard.defaultProps = {
  tasks: []
};

export default connect(
  mapStateToProps,
  null
)(Dashboard);
