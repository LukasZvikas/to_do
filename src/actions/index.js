import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../reducers/types';

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
