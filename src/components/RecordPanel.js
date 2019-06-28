import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeRecordingState } from '../actions';
import { addTask, updateTask, deleteTask } from '../actions';

const RecordPanel = ({
  isRecording,
  changeRecordingState,
  addTask,
  updateTask,
  deleteTask,
  recordedTasks
}) => {
  const playRecording = () => {
    let i = 0;
    setInterval(function() {
      if (i === recordedTasks.length) {
        clearInterval();
        return null;
      }

      const params = {
        ID: recordedTasks[i].ID,
        name: recordedTasks[i].name,
        description: recordedTasks[i].description,
        creationDate: recordedTasks[i].creationDate
      };

      switch (recordedTasks[i].actionType) {
        case 'add':
          addTask(params);
          break;
        case 'update':
          updateTask(params);
          break;
        case 'delete':
          deleteTask(recordedTasks[i].ID);
          break;
        default:
          return null;
      }

      i++;
    }, 2000);
  };

  return (
    <div className="d-flex justify-content-center">
      {isRecording ? (
        <button className="btn btn-danger" onClick={() => changeRecordingState()}>
          Stop Recording
        </button>
      ) : (
        <button className="btn btn-primary" onClick={() => changeRecordingState()}>
          Record
        </button>
      )}
      <button onClick={() => playRecording()} className="btn btn-info ml-3">
        Play Recording
      </button>
    </div>
  );
};

const mapStateToProps = ({ toDos: { isRecording, recordedTasks } }) => ({
  isRecording,
  recordedTasks
});

RecordPanel.propTypes = {
  isRecording: PropTypes.bool,
  changeRecordingState: PropTypes.func
};

RecordPanel.defaultProps = {
  isRecording: false,
  changeRecordingState: null
};

export default connect(
  mapStateToProps,
  { changeRecordingState, addTask, updateTask, deleteTask }
)(RecordPanel);
