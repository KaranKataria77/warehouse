/* eslint-disable prettier/prettier */

import {createStore, applyMiddleware, combineReducers} from 'redux';

import thunk from 'redux-thunk';
import {warehouses} from './reducer';
// import {createLogger} from 'redux-logger';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {cardReducer} from './showCard';
import { editReducer } from './EditCard';


const middleware = [thunk];

// const logger = createLogger({
//     /* https://github.com/evgenyrodionov/redux-logger */
//     collapsed: true,
//     diff: true
// });

// composeWithDevTools(
//     /* logger must be the last middleware in chain to log actions */
//     applyMiddleware(thunk, logger),
//   ),

const allReducers = combineReducers({
  warehouses,
  cardReducer,
  editReducer,
});

export const store = createStore(allReducers, applyMiddleware(...middleware));
