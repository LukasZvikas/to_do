import React, { Component } from 'react';
import { Task } from './task';

const todos = [
  { ID: 1, name: 'first', description: 'this is first', creationDate: 'June 12' },
  { ID: 2, name: 'second', description: 'this is second', creationDate: 'June 14' },
  { ID: 3, name: 'third', description: 'this is third', creationDate: 'June 15' }
];

class Dashboard extends Component {
  renderTasks(tasks) {
    return tasks.map(item => <Task name={item.name} description={item.description} />);
  }

  render() {
    return (
      <div className="row w-100 d-flex justify-content-center align-items-center flex-column">
        <div className="col-10 bg-light d-flex justify-content-between p-3">
          <div>ID</div>
          <div>Name</div>
          <div>description</div>
          <div>Creation date</div>
        </div>
        {this.renderTasks(todos)}
      </div>
    );
  }
}

export default Dashboard;
