import {GET_ALL_ORDERS,GET_PRODUCTS_OF_USER, GET_ORDER_BY_ID, PUT_ORDER_BY_ID, GET_ORDER_BY_USER_ID} from './order.action';

var initialState = {
  orders: [],
  ordersUser: [], 
};



const orderReducer = (state = initialState, action) => {
  switch (action.type) {

  case GET_ALL_ORDERS:
  case GET_PRODUCTS_OF_USER:
  case GET_ORDER_BY_ID:
  case PUT_ORDER_BY_ID:
    return {
      ...state,
      orders: action.payload,
    };
  case GET_ORDER_BY_USER_ID:
    return{
      ...state,
      ordersUser: action.payload
    }
    default:
      return state;
  }
};



export default orderReducer