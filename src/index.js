import React from 'react';
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './index.scss';
import 'macro-css';

import App from './App';
import store from './redux/store.js';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
