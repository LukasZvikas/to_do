import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TaskForm.css';

class TaskForm extends Component {
  state = {};
  onInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }
  render() {
    const { closeForm } = this.props;
    return (
      <div className="form-container w-100 h-100 row">
        <div className="d-flex col-10 col-md-5 flex-column justify-content-center align-items-center bg-white form-container__form p-4 w-100">
          <h5 className="mb-4">Add Task </h5>
          <div className="close-btn" onClick={closeForm}>
            close
          </div>
          <label>Title</label>
          <input name="title" onChange={e => this.onInputChange(e)} className="col-10 mb-3" />
          <label>Description</label>
          <textarea
            name="description"
            onChange={e => this.onInputChange(e)}
            className="col-10 mb-3"
          />
          <button className="btn btn-success my-3">Add</button>
        </div>
      </div>
    );
  }
}

TaskForm.propTypes = {
  closeForm: PropTypes.func.isRequired
};

export default TaskForm;
