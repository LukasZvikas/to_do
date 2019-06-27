import { combineReducers } from 'redux';
import toDoReducer from './toDoReducer';

const appReducer = combineReducers({
  toDos: toDoReducer
});

export default appReducer;
