import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  RECORD_ACTION,
  CHANGE_RECORDING_STATE
} from '../reducers/types';

export const addTask = taskDetails => ({
  type: ADD_TASK,
  payload: taskDetails
});

export const updateTask = taskDetails => ({
  type: UPDATE_TASK,
  payload: taskDetails
});

export const deleteTask = taskID => ({
  type: DELETE_TASK,
  payload: taskID
});

export const changeRecordingState = () => ({
  type: CHANGE_RECORDING_STATE
});

export const recordAction = recordDetails => ({
  type: RECORD_ACTION,
  payload: recordDetails
});
