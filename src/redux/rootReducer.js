import {combineReducers} from 'redux';
import graph from './reducers/graph';
import userInput from './reducers/userInput';
import currentCase from './reducers/currentCase';
import info from './reducers/info';

export default combineReducers({ graph, userInput, currentCase, info });