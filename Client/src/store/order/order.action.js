import axios from 'axios'
const serverUrl = "http://localhost:3001/";

export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_ORDER_BY_ID = "GET_ORDER_BY_ID";
export const PUT_ORDER_BY_ID = "PUT_ORDER_BY_ID";
export const PUT_QUANTITY_OF_ORDER = "PUT_QUANTITY_OF_ORDER";
export const GET_ORDER_BY_USER_ID = "GET_ORDER_BY_USER_ID";
export const AMOUNT_DEPOSITS = "AMOUNT_DEPOSITS";
export const GET_PRODUCTS_OF_USER="GET_PRODUCTS_OF_USER"

export const getAllOrders = () => {
    return (dispatch) => {
      axios.get(`${serverUrl}orders`).then((res) => {console.log("respuesta",res)
        if (res.status === 200) {
          return dispatch({ type: GET_ALL_ORDERS, payload: res.data });
        }
      });
    };
  };
  
  export const getOrderByUserId = (id) => {
    return function(dispatch){
      axios.get(`${serverUrl}orders/userid/${id}`).then(payload => {
        dispatch({type: GET_ORDER_BY_USER_ID, payload: payload.data})
      })
    }
  }
  
