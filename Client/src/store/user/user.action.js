import axios from 'axios'
const serverUrl = "http://localhost:3001/";


export const GET_USER_BYID = "GET_USER_BYID"
export const GET_USERS = "GET_USERS"
export const POST_USER = "POST_USER";
export const PUT_USER = "PUT_USER";
export const DELETE_USER = "DELETE_USER";
export const SELECT_USER = "SELECT_USER";






export const getUsersById = (id) => {
  return function (dispatch) {
    axios.get(`${serverUrl}users/${id}`).then((payload) => {console.log("esto es el user de id",payload)
      dispatch({ type:GET_USER_BYID , payload: payload.data });
    });
  };
};
