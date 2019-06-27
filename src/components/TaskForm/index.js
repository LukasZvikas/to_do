import React, { Component } from 'react';
import './TaskForm.css';

class TaskForm extends Component {
  render() {
    return (
      <div className="form-container w-100 h-100 row">
        <div className="d-flex col-10 col-md-5 flex-column justify-content-center align-items-center bg-white form-container__form p-4 w-100">
          <h5 className="mb-4">Add Task </h5>
          <label>Title</label>
          <input className="col-10 mb-3" />
          <label>Description</label>
          <textarea className="col-10 mb-3" />
          <button className="btn btn-success my-3">Add</button>
        </div>
      </div>
    );
  }
}

export default TaskForm;
