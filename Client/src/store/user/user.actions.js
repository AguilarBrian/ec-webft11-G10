export const GET_CART = "GET_CART";
export const ADD_TO_CART = "ADD_TO_CART";

export const getCart = (cart) => {

    return {
        type: GET_CART,
        payload: cart
    }
}

export const addToCart = (product) => {
    localStorage.setItem('cart', JSON.stringify(product))
    return {
        type: ADD_TO_CART,
        payload: product
    }
}