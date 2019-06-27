import { ADD_TASK } from './types';

const initialState = {
  tasks: []
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    default:
      return state;
  }
};
