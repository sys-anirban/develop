import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import Store from './Store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
