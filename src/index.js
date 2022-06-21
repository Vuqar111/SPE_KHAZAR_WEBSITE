import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './common/assets/css/index.css';
import App from './App';
import store from './common/store/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
