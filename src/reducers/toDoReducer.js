import { ADD_TASK, UPDATE_TASK } from './types';
import { removeItemFromArr } from '../utilities/helpers';

const initialState = {
  tasks: []
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case UPDATE_TASK:
      const newTaskArr = removeItemFromArr(state.tasks, payload.ID);
      return { ...state, tasks: [...newTaskArr, payload] };
    default:
      return state;
  }
};
