import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from './types';
import { removeItemFromArr } from '../utilities/helpers';

const initialState = {
  tasks: []
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
    default:
      return state;
  }
};
