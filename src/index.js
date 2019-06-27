import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import appReducer from './reducers';
import { getState, saveState } from './utilities/localStorage';

const savedState = getState();

const store = createStore(appReducer, savedState);

store.subscribe(() => {
  saveState({
    todos: store.getState().toDos.recordedTasks
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
