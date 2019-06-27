import React, { Component, Fragment } from 'react';
import { Task } from './task';
import TaskForm from './TaskForm';

const todos = [
  { ID: 1, name: 'first', description: 'this is first', creationDate: 'June 12' },
  { ID: 2, name: 'second', description: 'this is second', creationDate: 'June 14' },
  { ID: 3, name: 'third', description: 'this is third', creationDate: 'June 15' }
];

class Dashboard extends Component {
  state = { showForm: false };
  renderTasks(tasks) {
    return tasks.map(item => <Task name={item.name} description={item.description} />);
  }

  changeShowFormState() {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  }

  render() {
    const { showForm } = this.state;
    return (
      <Fragment>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Creation Date</th>
            </tr>
          </thead>
          <tbody>{this.renderTasks(todos)}</tbody>
        </table>
        {showForm ? <TaskForm closeForm={() => this.changeShowFormState()} /> : null}
        <button onClick={() => this.changeShowFormState()} className="btn btn-primary">
          Add Task
        </button>
      </Fragment>
    );
  }
}

export default Dashboard;
