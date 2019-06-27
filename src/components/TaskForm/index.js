import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './TaskForm.css';
import { addTask } from '../../actions';

class TaskForm extends Component {
  state = { taskDetails: {} };
  onInputChange({ target: { name, value } }) {
    const { taskDetails } = this.state;
    this.setState({
      taskDetails: { ...taskDetails, [name]: value }
    });
  }
  render() {
    const { closeForm, addTask } = this.props;
    const { taskDetails } = this.state;
    return (
      <div className="form-container w-100 h-100 row">
        <div className="d-flex col-10 col-md-5 flex-column justify-content-center align-items-center bg-white form-container__form p-4 w-100">
          <h5 className="mb-4">Add Task </h5>
          <div className="close-btn" onClick={closeForm}>
            close
          </div>
          <label>Title</label>
          <input name="name" onChange={e => this.onInputChange(e)} className="col-10 mb-3" />
          <label>Description</label>
          <textarea
            name="description"
            onChange={e => this.onInputChange(e)}
            className="col-10 mb-3"
          />
          <button
            onClick={() => {
              addTask({
                ...taskDetails,
                ID: Date.now(),
                creationDate: new Date().toLocaleString()
              });
              closeForm();
            }}
            className="btn btn-success my-3"
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

TaskForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { addTask }
)(TaskForm);
