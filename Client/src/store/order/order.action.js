import axios from 'axios'
const serverUrl = "http://localhost:3001/";

// const instance = axios.create({
//   withCredentials: true,
//   baseserverUrl: serverUrl,
// });



export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_ORDER_BY_ID = "GET_ORDER_BY_ID";
export const PUT_ORDER_BY_ID = "PUT_ORDER_BY_ID";
export const PUT_QUANTITY_OF_ORDER = "PUT_QUANTITY_OF_ORDER";
export const GET_ORDER_BY_USER_ID = "GET_ORDER_BY_USER_ID";
export const AMOUNT_DEPOSITS = "AMOUNT_DEPOSITS";
export const GET_PRODUCTS_OF_USER="GET_PRODUCTS_OF_USER"




// // PARA QUE TRAIGA ORDENES POR NOMBRE
// export const searchOrders = (name) => {

//     console.log("asdasd")
//     return (dispatch) => {
//         dispatch(searchOrderRequest())
//         axios.get(`${serverUrl}/orders/${name}`)
//             .then(orders => {
//                 dispatch(searchOrderSuccess(orders.data))
//             })
//             .catch(error => {
//                 dispatch(searchOrderFailure(error))
//             })
//     }
// }

// PARA QUE TRAIGA EL MONTO TOTAL DE LAS ORDENES

// export const searchOrders = (name) => {

//     console.log("asdasd")
//     return (dispatch) => {
//         dispatch(searchOrderRequest())
//         axios.get(`${serverserverUrl}/orders/${name}`)
//             .then(orders => {
//                 dispatch(searchOrderSuccess(orders.data))
//             })
//             .catch(error => {
//                 dispatch(searchOrderFailure(error))
//             })
//     }
// }

// export const getAllOrders = () => {
//   return (dispatch) => {
//       dispatch()=>{}
     
//   }
// }


export const getAllOrders = () => {
    return (dispatch) => {
      axios.get(`${serverUrl}orders`).then((res) => {console.log("respuesta",res)
        if (res.status === 200) {
          return dispatch({ type: GET_ALL_ORDERS, payload: res.data });
        }
      });
    };
  };
  
  // export const getOrderById = (id) => {
  //   return (dispatch) => {
  //     instance.get("/orders/" + id).then((res) => {
  //       if (res.status == 200) {
  //         return dispatch({ type: GET_ORDER_BY_ID, payload: res.data });
  //       }
  //     });
  //   };
  // };
  
  // export const putOrderById = (id, value) => {
  //   return function (dispatch) {
  //     instance.put("orders/" + id, value).then((payload) => {
  //       dispatch({ type: PUT_ORDER_BY_ID, payload: payload });
  //     });
  //   };
  // };
  
  // export const getOrderByUserId = (id) => {
  //   return function(dispatch){
  //     instance.get("orders/user/" + id).then(payload => {
  //       dispatch({type: GET_ORDER_BY_USER_ID, payload: payload.data})
  //     })
  //   }
  // }
  

// export const searchOrderRequest = () => {
//     return {
//         type: GET_ORDERS_REQUEST,
//     }
// }
// export const searchOrderSuccess = (order) => {
//     return {
//         type: GET_ORDERS_SUCCESS,
//         payload: order
//     }
// }
// export const searchOrderFailure = (error) => {
//     return {
//         type: GET_ORDERS_FAILURE,
//         payload: error
//     }
// }
// export const amountRequest = () => {
//     return {
//         type: AMOUNT_DEPOSITS,
//     }
// }
