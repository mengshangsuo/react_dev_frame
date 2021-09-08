import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BuildRouter from './router/indexRouter';

import { Provider } from 'react-redux';

import store from './provider/store/createAppStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BuildRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
