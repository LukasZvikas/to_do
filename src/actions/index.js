import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  RECORD_ACTION,
  CHANGE_RECORDING_STATE,
  CHANGE_PLAYING_STATE,
  CLEAR_TASKS_TO_BE_PLAYED,
  CLEAR_RECORDED_TASKS
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

export const changePlayingState = () => ({
  type: CHANGE_PLAYING_STATE
});

export const recordAction = recordDetails => ({
  type: RECORD_ACTION,
  payload: recordDetails
});

export const clearTasksToBePlayed = () => ({
  type: CLEAR_TASKS_TO_BE_PLAYED
});

export const clearRecordedTasks = () => ({
  type: CLEAR_RECORDED_TASKS
});
