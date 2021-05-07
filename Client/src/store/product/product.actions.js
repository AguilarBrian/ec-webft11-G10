import axios from 'axios'
const serverUrl="http://localhost:3001"

export const POST_PRODUCTS_SUCCESS = "POST_PRODUCTS_SUCCESS";
export const POST_PRODUCTS_FAILURE = "POST_PRODUCTS_FAILURE";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SET_PRODUCT_IMG = "SET_PRODUCT_IMG";
export const SEARCH_PRODUCT_REQUEST = "SEARCH_PRODUCT_REQUEST";
export const SEARCH_PRODUCT_SUCCESS = "SEARCH_PRODUCT_SUCCESS";
export const SEARCH_PRODUCT_FAILURE = "SEARCH_PRODUCT_FAILURE";

// PARA QUE TRAIGA PRODUCTOS POR NOMBRE
export const searchProducts = (name) => {
    return (dispatch) => {
        dispatch(searchProductRequest())
        axios.get(`${serverUrl}/products/search/${name}`)
            .then(products => {
                dispatch(searchProductSuccess(products.data))
            })
            .catch(error => {
                dispatch(searchProductFailure(error))
            })
    }
}

export const searchProductRequest = () => {
    return {
        type: SEARCH_PRODUCT_REQUEST,
    }
}
export const searchProductSuccess = (product) => {
    return {
        type: SEARCH_PRODUCT_SUCCESS,
        payload: product
    }
}
export const searchProductFailure = (error) => {
    return {
        type: SEARCH_PRODUCT_FAILURE,
        payload: error
    }
}






export const setImgUrl=(imgUrl)=>{
    return {
        type: SET_PRODUCT_IMG,
        payload: imgUrl
    }
}

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