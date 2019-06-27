import { ADD_TASK } from '../reducers/types';

export const addTask = taskDetails => ({
  type: ADD_TASK,
  payload: taskDetails
});
