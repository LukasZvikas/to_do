import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Task } from './task';
import TaskForm from './TaskForm';

class Dashboard extends Component {
  state = { showForm: false };
  renderTasks(tasks) {
    return tasks.map(item => (
      <Task
        key={item.ID}
        ID={item.ID}
        name={item.name}
        description={item.description}
        creationDate={item.creationDate}
      />
    ));
  }

  changeShowFormState() {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  }

  render() {
    const { showForm } = this.state;
    const { tasks } = this.props;
    return (
      <Fragment>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Creation Date</th>
            </tr>
          </thead>
          <tbody>{this.renderTasks(tasks)}</tbody>
        </table>
        {showForm ? <TaskForm closeForm={() => this.changeShowFormState()} /> : null}
        <button onClick={() => this.changeShowFormState()} className="btn btn-primary">
          Add Task
        </button>
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
