/* eslint-disable prettier/prettier */
const initialState = {
    editDetail: {},
  };
  export const editReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'EDIT_CARD':
        return action.payload;
      default:
        return state;
    }
  };
  