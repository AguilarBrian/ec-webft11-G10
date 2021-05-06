import axios from 'axios'

export const POST_PRODUCTS_SUCCESS = "POST_PRODUCTS_SUCCESS";
export const POST_PRODUCTS_FAILURE = "POST_PRODUCTS_FAILURE";
export const GET_PRODUCTS = "GET_PRODUCTS";
const serverUrl="http://localhost:3001"

export const postProducts = (product) => {
    return (dispatch) => {
        const options = {
            method: 'POST',
            url: `${serverUrl}/products/`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: product
        };
        return axios.request(options).then(function (products) {
            dispatch(postProductsSuccess(products.data))
        })
            .catch(error => {
                dispatch(postProductsFailure(error))
            })
    }
}

export const getProducts = () => {
    return (dispatch) => {
        return axios.get(`${serverUrl}/products/`).then(result => {
            dispatch({
                type: GET_PRODUCTS,
                payload: result.data
            })
        })
        .catch(err => console.log({message: err.message}))
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