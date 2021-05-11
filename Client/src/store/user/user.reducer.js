import {GET_USER_BYID, POST_USER, DELETE_USER,PUT_USER, GET_USERS } from './user.action';

var initialState = {
  users: [],
  user: undefined,
};



const userReducer = (state = initialState, action) => {
  switch (action.type) {

      case POST_USER:
      case GET_USER_BYID:
      case DELETE_USER:
      case PUT_USER:
      case GET_USERS:
        return {
          ...state,
          users: action.payload,
        };
    default:
      return state;
  }
};



export default userReducer