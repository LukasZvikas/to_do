import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask, recordAction } from '../actions';
import { Button } from './button';

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
  <tr>
    {recordingState && <td>{actionType}</td>}
    <td>{ID}</td>
    <td>{name}</td>
    <td>{description}</td>
    <td>{creationDate}</td>
    {!recordingState ? (
      <td className="d-flex justify-content-start align-items-center">
        <Fragment>
          <Button
            name="Update"
            onClick={showForm}
            color="btn-success"
            marginX={'mx-2'}
            marginY={'my-0'}
          />
          <Button
            name="Delete"
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
            color="btn-danger"
            marginX={'mx-0'}
            marginY={'my-0'}
          />
        </Fragment>
      </td>
    ) : null}
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
  showForm: PropTypes.func,
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
  recordingState: false,
  showForm: null
};

export default connect(
  mapStateToProps,
  { deleteTask, recordAction }
)(Task);
