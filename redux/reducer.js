/* eslint-disable prettier/prettier */
import data from '../data.json';
import {showCard} from './dispatchAction';
const initialState = {
  value: [],
};
export const warehouses = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_DATA':
      return action.payload;
    case 'SPACE_FILTER':
      return action.payload;
    case 'REG_FILTER':
      return action.payload;
    default: 
    return state
  }
};
