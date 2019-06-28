import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './TaskForm.css';
import { addTask, updateTask, recordAction } from '../../actions';
import { getRandomDigits } from '../../utilities/randomDigits';

class TaskForm extends Component {
  state = { taskDetails: {} };
  onInputChange({ target: { name, value } }) {
    const { taskDetails } = this.state;
    this.setState({
      taskDetails: { ...taskDetails, [name]: value }
    });
  }

  determineAction() {
    const { isUpdate, addTask, updateTask, ID, closeForm, isRecording, recordAction } = this.props;
    const { taskDetails } = this.state;

    const creationDate = new Date().toLocaleString();

    const params = { ...taskDetails, creationDate };

    let newID = getRandomDigits();

    if (isUpdate) {
      updateTask({ ...params, ID });
    } else {
      addTask({ ...params, ID: newID });
    }

    if (isRecording) {
      recordAction({
        actionType: isUpdate ? 'update' : 'add',
        ...params,
        ID: ID ? ID : newID
      });
    }

    closeForm();
  }
  render() {
    const { closeForm, isUpdate, ID } = this.props;
    const {
      taskDetails: { name, description }
    } = this.state;
    return (
      <div className="form-container w-100 h-100 row">
        <div className="d-flex col-10 col-md-5 flex-column justify-content-center align-items-center bg-white form-container__form p-4 w-100">
          <h5 className="mb-4">{isUpdate ? `Update task ${ID}` : 'Add Task'} </h5>
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
            disabled={!name || !description}
            onClick={() => this.determineAction()}
            className="btn btn-success my-3"
          >
            {isUpdate ? `Update Task` : 'Add Task'}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ toDos: { isRecording } }) => ({
  isRecording
});

TaskForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  isUpdate: PropTypes.bool,
  ID: PropTypes.number,
  isRecording: PropTypes.bool
};

TaskForm.defaultProps = {
  isUpdate: false,
  ID: null,
  isRecording: false
};

export default connect(
  mapStateToProps,
  { addTask, updateTask, recordAction }
)(TaskForm);
