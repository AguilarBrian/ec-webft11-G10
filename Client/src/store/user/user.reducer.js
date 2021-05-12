
import {GET_USER_BYID, POST_USER, DELETE_USER,PUT_USER, GET_USERS } from './user.action';
import { GET_CART, ADD_TO_CART } from './user.actions';
const cartFromlocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

var initialState = {
  users: [],
  user: [],
  cart: cartFromlocalStorage
};



const userReducer = (state = initialState, action) => {
  switch (action.type) {

      
      case GET_USER_BYID:
        return {
          ...state,
          user: action.payload,
        };
      case POST_USER:
      case DELETE_USER:
      case PUT_USER:
      case GET_USERS:
        return {
          ...state,
          users: action.payload,
        };
        case GET_CART:
          return {
            ...state,
            cart: action.payload
    
          }
        case ADD_TO_CART:
          localStorage.setItem('cart', JSON.stringify([...state.cart, action.payload]))
          if (state.cart.length >= 1) {
            return {
              ...state,
              cart: [...state.cart, action.payload]
            }
          } else {
            return {
              ...state,
              cart: [action.payload]
            }
          }
    default:
      return state;
  }
};



export default userReducer



