import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import 'tachyons';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {searchRobots} from './reducers'

const store = createStore(searchRobots)

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);

//reportWebVitals();
