import axios from 'axios'
import Swal from 'sweetalert2'

export const GET_CATEGORY = "GET_CATEGORY";
export const DELETE_CATEGORY_BY_ID = "DELETE_CATEGORY_BY_ID"
export const POST_ADD_CATEGORY = 'POST_ADD_CATEGORY'
export const SEARCH_PRODUCT_REQUEST_CATEGORIES = "SEARCH_PRODUCT_REQUEST_CATEGORIES";
export const SEARCH_PRODUCT_SUCCESS_CATEGORIES = "SEARCH_PRODUCT_SUCCESS_CATEGORIES";
export const SEARCH_PRODUCT_FAILURE_CATEGORIES = "SEARCH_PRODUCT_FAILURE_CATEGORIES";

export const getCategory = () => dispatch => {
    let URL = "http://localhost:3001/category/get"
    axios.get(URL)
        .then(res => {
            dispatch({ type: 'GET_CATEGORY', payload: res.data })
        }).catch(err => {
            dispatch({ type: 'GET_CATEGORY', payload: err })
        })
}

export const putDeleteCategory = (id) => dispatch => {
    axios.delete(`http://localhost:3001/category/${id}`)
        .then(res => {
            dispatch({ type: DELETE_CATEGORY_BY_ID, payload: res })
            getCategory()
            Swal.fire( 'Good job!', 'You delete the product succesfully!', 'success')
        })
        .catch(error => {
            console.log(error)
            Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong!',
            })
        })
}

export const postAddCategory = (category) => dispatch => {
    let URL = `http://localhost:3001/category`
    axios.post(URL, category, { headers: { 'Content-Type': 'application/json' } })
        .then(res => {
            dispatch({ type: 'POST_ADD_CATEGORY', payload: res })
            console.log(res)
            Swal.fire('Good job!','You updated the product succesfully!','success'
            )
        }).catch(err => {
            dispatch({ type: 'POST_ADD_CATEGORY', payload: err })
            Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong!',
            })
        })
}

export const searchProductRequest = () => {
    return {
        type: 'SEARCH_PRODUCT_REQUEST_CATEGORIES',
    }
}
export const searchProductSuccess = (product) => {
    return {
        type: 'SEARCH_PRODUCT_SUCCESS_CATEGORIES',
        payload: product
    }
}
export const searchProductFailure = (error) => {
    return {
        type: 'SEARCH_PRODUCT_FAILURE_CATEGORIES',
        payload: error
    }
}

export const searchProducts = (name) => {
    return (dispatch) => {
        dispatch(searchProductRequest())
        axios.get(`http://localhost:3001/category/productsbycategories/${name}`)
            .then(products => {
                dispatch(searchProductSuccess(products.data[0].products))
                console.log(products.data)
            })
            .catch(error => {
                dispatch(searchProductFailure(error))
            })
    }
}
