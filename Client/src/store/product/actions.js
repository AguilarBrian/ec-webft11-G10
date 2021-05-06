import axios from 'axios'

export const POST_PRODUCTS_REQUEST = "POST_PRODUCTS_REQUEST";
export const POST_PRODUCTS_SUCCESS = "POST_PRODUCTS_SUCCESS";
export const POST_PRODUCTS_FAILURE = "POST_PRODUCTS_FAILURE";
export const postProducts = () => {

    return (dispatch) => {
        dispatch(postProductsRequest())
        axios.get(`${serverUrl}/products/`)
            .then(products => {
                dispatch(postProductsSuccess(products.data))
            })
            .catch(error => {
                dispatch(postProductsFailure(error))
            })
    }
}
export const postProductsRequest = () => {
    return {
        type: POST_PRODUCTS_REQUEST,
    }
}
export const postProductsSuccess = (products) => {
    return {
        type: POST_PRODUCTS_SUCCESS,
        payload: products
    }
}
export const postProductsFailure = (error) => {
    return {
        type: POST_PRODUCTS_FAILURE,
        payload: error
    }
}