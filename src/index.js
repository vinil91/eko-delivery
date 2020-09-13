import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';

import rootReducer from './redux/rootReducer';

import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App title="Eko​ ​Delivery​ ​Service" />
  </Provider>, 
  document.getElementById('root')
);
