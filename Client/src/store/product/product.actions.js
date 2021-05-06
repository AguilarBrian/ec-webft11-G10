import axios from 'axios'

export const POST_PRODUCTS_SUCCESS = "POST_PRODUCTS_SUCCESS";
export const POST_PRODUCTS_FAILURE = "POST_PRODUCTS_FAILURE";
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