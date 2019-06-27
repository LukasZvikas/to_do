import { ADD_TASK, UPDATE_TASK } from '../reducers/types';

export const addTask = taskDetails => ({
  type: ADD_TASK,
  payload: taskDetails
});

export const updateTask = taskDetails => ({
  type: UPDATE_TASK,
  payload: taskDetails
});
