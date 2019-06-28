import React from 'react';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import appReducer from './reducers';
import { getState, saveState } from './utilities/localStorage';

const savedState = getState();

const store = createStore(appReducer, savedState);

store.subscribe(
  _.throttle(() => {
    saveState({
      toDos: store.getState().toDos
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
