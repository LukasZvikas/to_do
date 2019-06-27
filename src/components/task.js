import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask, recordAction } from '../actions';

const Task = ({
  ID,
  name,
  description,
  creationDate,
  showForm,
  deleteTask,
  isRecording,
  recordAction,
  actionType,
  recordingState
}) => (
  <tr scope="row">
    {recordingState && <td>{actionType}</td>}
    <td>{ID}</td>
    <td>{name}</td>
    <td>{description}</td>
    <td>{creationDate}</td>
    <td>
      {!recordingState ? (
        <Fragment>
          <button onClick={showForm} className="btn btn-success">
            Update
          </button>
          <button
            onClick={() => {
              deleteTask(ID);
              isRecording &&
                recordAction({
                  actionType: 'delete',
                  ID,
                  name,
                  description,
                  creationDate
                });
            }}
            className="btn btn-danger ml-2"
          >
            Delete
          </button>
        </Fragment>
      ) : null}
    </td>
  </tr>
);

const mapStateToProps = ({ toDos: { isRecording } }) => ({
  isRecording
});

Task.propTypes = {
  ID: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  creationDate: PropTypes.string,
  showForm: PropTypes.func.isRequired,
  deleteTask: PropTypes.func,
  actionType: PropTypes.string,
  recordAction: PropTypes.func,
  isRecording: PropTypes.bool,
  recordingState: PropTypes.bool
};

Task.defaultProps = {
  ID: Date.now(),
  name: PropTypes.string,
  description: PropTypes.string,
  creationDate: new Date().toLocaleString(),
  deleteTask: null,
  actionType: null,
  recordAction: null,
  isRecording: false,
  recordingState: false
};

export default connect(
  mapStateToProps,
  { deleteTask, recordAction }
)(Task);
