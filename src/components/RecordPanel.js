import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeRecordingState } from '../actions';

const RecordPanel = ({ isRecording, changeRecordingState }) => {
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
    </div>
  );
};

const mapStateToProps = ({ toDos: { isRecording } }) => ({
  isRecording
});

RecordPanel.propTypes = {
  isRecording: PropTypes.bool,
  changeRecordingState: PropTypes.func
};

RecordPanel.defaultProps = {
  isRecording: false,
  changeRecordingState: () => console.log('changeRecordingState')
};

export default connect(
  mapStateToProps,
  { changeRecordingState }
)(RecordPanel);
