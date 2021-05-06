import axios from 'axios'

export const POST_PRODUCTS_SUCCESS = "POST_PRODUCTS_SUCCESS";
export const POST_PRODUCTS_FAILURE = "POST_PRODUCTS_FAILURE";
export const postProducts = () => {

    return (dispatch) => {
        axios.get(`http://localhost:3001/products/`)
            .then(products => {
                dispatch(postProductsSuccess(products.data))
            })
            .catch(error => {
                dispatch(postProductsFailure(error))
            })
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