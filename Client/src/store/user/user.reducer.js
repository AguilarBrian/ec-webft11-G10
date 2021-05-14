import {REMOVE_FROM_CART,SET_PRODUCT_QUANTITY, GET_CART,GET_TOTAL, ADD_TO_CART, GET_USER_BYID, POST_USER, DELETE_USER, PUT_USER, GET_USERS } from './user.action';
const cartFromlocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

const initialState = {
  cart: cartFromlocalStorage,
  users: [],
  user: undefined,
  productQuantity:[],
  total:0,
  productTotal:[]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FROM_CART:
      return{
        ...state,
        productQuantity:state.productQuantity.filter(prod=>{
          return action.payload !==prod.name
        })
      }
    case SET_PRODUCT_QUANTITY:
      return{
        ...state,
        productTotal:[action.payload, ...state.productQuantity]
      }
    case GET_TOTAL:
      return{
        ...state,
        total:action.payload
      }
    case "COUNT_CART":
      return{
        ...state,
        productQuantity:action.payload
      }
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
    default:
      return state;
  }
}


export default userReducer;



