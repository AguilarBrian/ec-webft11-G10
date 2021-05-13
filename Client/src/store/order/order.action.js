import axios from 'axios'
const serverUrl = "http://localhost:3001/";

export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_ORDER_BY_ID = "GET_ORDER_BY_ID";
export const PUT_ORDER_BY_ID = "PUT_ORDER_BY_ID";
export const PUT_QUANTITY_OF_ORDER = "PUT_QUANTITY_OF_ORDER";
export const GET_ORDER_BY_USER_ID = "GET_ORDER_BY_USER_ID";
export const AMOUNT_DEPOSITS = "AMOUNT_DEPOSITS";
export const GET_PRODUCTS_OF_USER="GET_PRODUCTS_OF_USER";
export const DELETE_CART="DELETE_CART"


export const getAllOrders = () => {
    return (dispatch) => {
      axios.get(`${serverUrl}orders/`).then((res) => {console.log("respuesta",res)
        if (res.status === 200) {
          return dispatch({ type: GET_ALL_ORDERS, payload: res.data});
        }
      });
    };
  };
  
  export const getOrderByUserId = (id) => {
    return function(dispatch){
      axios.get(`${serverUrl}orders/userid/${id}`).then(payload => {console.log("esto trae action de orderbyid",payload)
        dispatch({type: GET_ORDER_BY_USER_ID, payload: payload.data[0]})
      })
    }
  }
  

  export const putOrderById = (id, data) => {
    return function (dispatch) {
      axios.put(`${serverUrl}orders/${id}/modifica`, data).then((payload) => {
        dispatch({ type:PUT_ORDER_BY_ID, payload: payload });
      }).catch((err)=>console.log(err))
    };
  };


  export const cleanCart = (id) => {
    return function (dispatch) {
      axios.delete(`${serverUrl}cart/${id}/cart`).then((payload) => {
        dispatch({ type:DELETE_CART, payload: payload });
      }).catch((err)=>console.log(err))
    };
  };
  
