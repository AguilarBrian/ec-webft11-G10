import axios from 'axios'

export const GET_CATEGORY = "GET_CATEGORY";

export const getCategory = () => dispatch => {
    let URL = "http://localhost:3001/products/category/get"
    axios.get(URL)
        .then(res => {
            dispatch({ type: 'GET_CATEGORY', payload: res.data })
        }).catch(err => {
            dispatch({ type: 'GET_CATEGORY', payload: err })
        })
}

