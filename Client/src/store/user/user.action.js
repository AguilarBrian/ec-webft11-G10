import axios from 'axios'
const serverUrl = "http://localhost:3001/";

export const GET_CART = "GET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_USER_BYID = "GET_USER_BYID"
export const GET_USERS = "GET_USERS"
export const POST_USER = "POST_USER";
export const PUT_USER = "PUT_USER";
export const DELETE_USER = "DELETE_USER";
export const SELECT_USER = "SELECT_USER";
export const GET_TOTAL = "GET_TOTAL";

export const getUsersById = (id) => {
    return function (dispatch) {
        axios.get(`${serverUrl}users/${id}`).then((payload) => {
            console.log("esto es el user de id de action", payload)
            dispatch({ type: GET_USER_BYID, payload: payload.data });
        });
    };
};

export const getUsers = () => {
  return function (dispatch) {
    axios.get(`${serverUrl}users/users`).then((payload) => {
      dispatch({ type: GET_USERS, payload: payload.data });
    });
  };
};

export const getCart = (cart) => {
    return function (dispatch) {

        dispatch(countProducts(cart))
        dispatch(getTotal(cart))
        return {
            type: GET_CART,
            payload: cart
        }
    }

}
export const getTotal = (cart) => {
    return function (dispatch) {

        let total = 0
        cart.forEach(prod => {
            let price=parseInt(prod.price)
            total = total + price
        });
        console.log(total)
        dispatch( {
            type: GET_TOTAL,
            payload: total
        })
    }
}

export const addToCart = (product) => {
    localStorage.setItem('cart', JSON.stringify(product))
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const countProducts = (cart) => {

    const productSet = (cart) => {
        if (cart && cart[0]) {
            let productQuantitys = []
            for (let i = 0; i < cart.length; i++) {
                cart[i].quantity = 1
                let repeat = productQuantitys.find(e => e.name === cart[i].name)
                if (repeat) {
                    repeat.quantity += 1
                } else {
                    productQuantitys.push(cart[i])
                }
            }
            return productQuantitys
        }
    }
    return {
        type: "COUNT_CART",
        payload: productSet(cart)

    }


}
