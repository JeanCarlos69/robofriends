import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import {robots} from './robots';
import CardList from './CardList';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(<CardList robots={robots}/>,
  document.getElementById('root')
);

//reportWebVitals();
