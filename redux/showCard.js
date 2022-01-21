/* eslint-disable prettier/prettier */
const initialState = {
  detail: {},
};
export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_CARD':
      return action.payload;
    default:
      return state;
  }
};
