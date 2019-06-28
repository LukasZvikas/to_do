import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  RECORD_ACTION,
  CHANGE_RECORDING_STATE,
  CHANGE_PLAYING_STATE,
  CLEAR_TASKS_TO_BE_PLAYED,
  CLEAR_RECORDED_TASKS
} from './types';
import { removeItemFromArr } from '../utilities/helpers';

const initialState = {
  tasks: [],
  tasksToBePlayed: [],
  recordedTasks: [],
  isRecording: false,
  isPlaying: false
};

export default (state = initialState, { payload, type }) => {
  let objToUpdate;
  let updatedTasks;
  switch (type) {
    case ADD_TASK:
      objToUpdate = state.isPlaying
        ? { ...state, tasksToBePlayed: [...state.tasksToBePlayed, payload] }
        : { ...state, tasks: [...state.tasks, payload] };
      return objToUpdate;
    case UPDATE_TASK:
      updatedTasks = removeItemFromArr(
        state.isPlaying ? state.tasksToBePlayed : state.tasks,
        payload.ID
      );
      objToUpdate = state.isPlaying
        ? { ...state, tasksToBePlayed: [...updatedTasks, payload] }
        : { ...state, tasks: [...updatedTasks, payload] };
      return objToUpdate;
    case DELETE_TASK:
      updatedTasks = removeItemFromArr(
        state.isPlaying ? state.tasksToBePlayed : state.tasks,
        payload
      );
      objToUpdate = state.isPlaying
        ? { ...state, tasksToBePlayed: [...updatedTasks] }
        : { ...state, tasks: [...updatedTasks] };
      return objToUpdate;
    case RECORD_ACTION:
      return { ...state, recordedTasks: [...state.recordedTasks, payload] };
    case CHANGE_RECORDING_STATE:
      return { ...state, isRecording: !state.isRecording };
    case CHANGE_PLAYING_STATE:
      return { ...state, isPlaying: !state.isPlaying };
    case CLEAR_TASKS_TO_BE_PLAYED:
      return { ...state, tasksToBePlayed: [] };
    case CLEAR_RECORDED_TASKS:
      return { ...state, recordedTasks: [] };
    default:
      return state;
  }
};
