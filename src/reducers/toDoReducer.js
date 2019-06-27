import { ADD_TASK, UPDATE_TASK, DELETE_TASK, RECORD_ACTION, CHANGE_RECORDING_STATE } from './types';
import { removeItemFromArr } from '../utilities/helpers';

const initialState = {
  tasks: [],
  isRecording: false
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case UPDATE_TASK:
      const updatedTasks = removeItemFromArr(state.tasks, payload.ID);
      return { ...state, tasks: [...updatedTasks, payload] };
    case DELETE_TASK:
      const newTaskArr = removeItemFromArr(state.tasks, payload);
      return { ...state, tasks: [...newTaskArr] };
    case RECORD_ACTION:
      return state;
    case CHANGE_RECORDING_STATE:
      return { ...state, isRecording: !state.isRecording };
    default:
      return state;
  }
};
