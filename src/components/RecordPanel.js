import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addTask,
  updateTask,
  deleteTask,
  changeRecordingState,
  changePlayingState,
  clearTasksToBePlayed,
  clearRecordedTasks
} from '../actions';
import { Button } from './button';

const RecordPanel = ({
  isRecording,
  isPlaying,
  changeRecordingState,
  changePlayingState,
  clearTasksToBePlayed,
  clearRecordedTasks,
  addTask,
  updateTask,
  deleteTask,
  recordedTasks
}) => {
  const playRecording = () => {
    let i = 0;
    const interval = setInterval(() => {
      if (i === recordedTasks.length) {
        clearInterval(interval);
        i = 0;
        clearTasksToBePlayed();
        return changePlayingState();
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
    <div className="d-flex justify-content-center mb-5">
      {isRecording ? (
        <Button color="btn-danger" name="Stop Recording" onClick={() => changeRecordingState()} />
      ) : (
        <Button
          disabled={isPlaying}
          name="Record"
          color="btn-primary"
          onClick={() => changeRecordingState()}
        />
      )}

      <Button
        disabled={isRecording}
        name={isPlaying ? 'Playing' : 'Play Recording'}
        onClick={() => {
          changePlayingState();
          playRecording();
        }}
        color="btn-info"
      />

      <Button
        name="Clear Record Log"
        disabled={isPlaying || isRecording}
        color="btn-danger"
        onClick={() => clearRecordedTasks()}
      />
    </div>
  );
};

const mapStateToProps = ({ toDos: { isRecording, recordedTasks, isPlaying } }) => ({
  isRecording,
  isPlaying,
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
  {
    changeRecordingState,
    addTask,
    updateTask,
    deleteTask,
    changePlayingState,
    clearTasksToBePlayed,
    clearRecordedTasks
  }
)(RecordPanel);
